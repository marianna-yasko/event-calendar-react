import initialState from './initialState';
import storage from '../services/storage';
import { eventsActionTypes } from '../actions/actionTypes';
import { fetchEvents } from '../actions/eventsActions';

export default function events (state = initialState, action) {
    let updatedEvents;
    switch (action.type) {
        case eventsActionTypes.FETCH_EVENTS: {
            updatedEvents = fetchEvents();
            return Object.assign({}, initialState, updatedEvents || state.events);
        }
        case eventsActionTypes.CREATE_EVENT: {
            updatedEvents = state.events.push(action.event);
            storage.store('events', updatedEvents);
            return Object.assign({}, initialState, updatedEvents);
        }
        case eventsActionTypes.EDIT_EVENT: {
            updatedEvents = state.events.map(event => {
                if (event.id === action.event.id) {
                    event = action.event;
                }
                return event;
            });
            storage.store('events', updatedEvents);
            return Object.assign({}, initialState, updatedEvents);
        }
        case eventsActionTypes.REMOVE_EVENT: {
            const indexOfRemovedEvent = state.events.findIndex(event => {
                return event.id === action.event.id;
            });
            console.log(indexOfRemovedEvent);
            return Object.assign({}, initialState, updatedEvents);
        }
        default: {
            return initialState;
        }
    }
}
