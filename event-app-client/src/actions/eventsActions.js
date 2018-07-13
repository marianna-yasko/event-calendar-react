import * as actionTypes from './actionTypes';
import eventsApi from '../services/api/eventsApi';

function serializeEvents(json) {
    return {type: actionTypes.eventsActionTypes.FETCH_EVENTS, events: json.body};
}

export function fetchEvents() {
    return dispatch => {
        return fetch(eventsApi.url(), {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {response.json()})
            .then(json => {dispatch(serializeEvents(json))})
    }
}
