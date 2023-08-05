import React from "react";
import { AbstractLayout } from "./components/AbstractLayout";
import { IframeCalendar, ReactCal } from "./components/CalendarComponent";



export class Calendar extends AbstractLayout {
    state = {
        toggleCalenderVersions: false
    }

    renderHero() {
        const { toggleCalenderVersions } = this.state;

        const toggleCalendar = () => {
            this.setState({ toggleCalenderVersions: !toggleCalenderVersions })
        }

        return (
            <>
                <button onClick={toggleCalendar}>Switch Calendar</button>
            </>
        )
    }

    renderBody() {
        const { toggleCalenderVersions } = this.state;
        return (
            <>
                {toggleCalenderVersions ? <IframeCalendar /> : <ReactCal />}
            </>
        )
        
        
    }
}
