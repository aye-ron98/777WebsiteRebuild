import axios from 'axios';

export class GraphInterface {
    static async getAccessToken() {
        try {

            // request headers cannot be included in POST request from client side (also unnecessary)

            // body params not necessary for POST request from client side   

            const tokenEndpoint = `/getAccessToken`;

            await axios.post(tokenEndpoint);

            return true

        } catch (error) {
            console.error(error.response, "response");
            console.error(error.request, "request");
            console.error(error.message, "message here");

            return false
        }

    }

    static async getEvents() {
        try {
            const endpoint = `/getCalendarEvents`;

            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const activities = await response.json();

            return activities.events;

        } catch (error) {
            console.error('Error:', error);
        }
    }

    /**
     * Body select param does not work with v1.0 api. No fix until Microsoft updates api
     * @param {String} eventId id of specific event to pass to api
     * @returns 
     */
    static async getEventDetails(eventId) {
        try {
            const endpoint = `/getEventDetails?eventId=${encodeURIComponent(eventId)}`;

            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const eventDetails = await response.json();

            return eventDetails;

        } catch (error) {
            console.error('Error:', error);
        }
    }

    static async getChannelMessages() {
        try {
            const endpoint = `/getChannelMessages`;

            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const messages = await response.json();

            return messages.messages;
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
}