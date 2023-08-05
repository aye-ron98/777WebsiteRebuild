import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { GraphInterface } from './utils/api.js'
import './CSS/components.css';

/**
 * 
 * @returns Calendar component
 */
export class ReactCal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarView: 'dayGridMonth',
            events: [],
            eventDetails: {
                title: null,
                start: null,
                end: null,
                location: null,
                description: null,
            },
            togglePopover: false,
        }
    }

    /**
     * Add event listener when component is mounted
     */
    componentDidMount() {
        try {
            GraphInterface.getAccessToken()
            Promise.resolve(GraphInterface.getAccessToken()).then(data => {
                if (data) {
                    this.addEvents()
                }
            })

        } catch (error) {
            console.error(error);
        }
        window.addEventListener('resize', this.detectView);
    }

    /**
     * Remove event listener when component is unmounted
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.detectView);
    }

    /**
     * Ensures that the calendar view is updated when the window is resized
     * @param {props} prevProps unused
     * @param {props} prevState the previous state of the prop
     */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.calendarView !== this.state.calendarView) {
            // Initial view state has changed, force calendar re-render
            this.calendarRef.getApi().changeView(this.state.calendarView);
        }
    }

    /**
     * Get events from ms graph api and add them to the calendar
     */
    addEvents() {
        try {
            GraphInterface.getEvents().then((data) => {
                data.forEach(event => {
                    const start = event.start.dateTime
                    const end = event.end.dateTime
                    const subject = event.subject
                    const location = event.location.displayName
                    const address = event.location.address
                    const newEvent = {
                        title: subject,
                        start: start,
                        end: end,
                        location: location,
                        address: address,
                    }
                    this.setState(prevEvents => ({
                        events: [...prevEvents.events, newEvent]
                    }))
                });
            });
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * sets state to show event details
     * @param {EventObject} eventClickInfo ms graph event object
     */
    showEventDetails = (eventClickInfo) => {
        console.log(eventClickInfo)
        const selected = eventClickInfo.event;

        const startString = selected._instance.range.start.toLocaleString();
        const endString = selected._instance.range.end.toLocaleString();

        this.setState({
            eventDetails: {
                title: selected._def.title,
                start: startString,
                end: endString,
                location: selected._def.extendedProps.location,
                address: selected._def.extendedProps.address,
            },
            togglePopover: true,
        })
    }

    /**
     * Close the modal reset event details to null
     */
    closeEventDetails = () => {
        this.setState({
            eventDetails: {
                title: null,
                start: null,
                end: null,
                location: null,
                description: null,
            },
            togglePopover: false,
        })
    }

    /**
     * Make a modal to display event details
     * @returns modal component
     */
    renderModal() {

        const { eventDetails } = this.state;
        const city = eventDetails.address.city;
        const street = eventDetails.address.street;
        const postalCode = eventDetails.address.postalCode;

        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={
                        this.closeEventDetails
                    }>&times;</span>
                    <h1>{eventDetails.title}</h1>
                    <p>start: {eventDetails.start}</p>
                    <p>end: {eventDetails.end}</p>
                    <p>location: {eventDetails.location}</p>
                    <p>address: {street}, {city}, {postalCode}</p>
                </div>
            </div>
        )
    }

    /**
     * Detect the window width and set the calendar view accordingly
     */
    detectView = () => {
        const getWindowWidth = window.innerWidth;
        const view = getWindowWidth < 786 ? 'listWeek' : 'dayGridMonth';
        this.setState({ calendarView: view });
    }

    render() {
        const style = {
            width: '100%', height: '600px'
        }
        const { calendarView, events, togglePopover } = this.state;

        return (
            <>
                <div style={style}>
                    <FullCalendar
                        ref={(ref) => (this.calendarRef = ref)}
                        plugins={[dayGridPlugin, listPlugin]}
                        initialView={calendarView}
                        width={"90%"}
                        height={"90%"}
                        events={events}
                        eventClick={this.showEventDetails}
                    />
                </div>
                {togglePopover && this.renderModal()}
            </>
        )
    }

}

/**
 * MS Outlook Iframe calendar for alternate view
 */
export class IframeCalendar extends Component {

    render() {
        return (
            <div className="calendar-container">
                <iframe className="responsive-iframe"
                    src="https://outlook.office365.com/owa/calendar/04b37868eaee493a9b5e7bb7b9aad14e@777aircadets.ca/ed29346951404368bff4f7a614575ada1059623207121078655/calendar.html"
                    title="Outlook Calendar"
                ></iframe>
            </div>
        )
    }
}
