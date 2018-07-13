import {combineReducers} from 'redux';
import events from './eventsReducers';

const rootReducer = combineReducers({
    events
});

export default rootReducer;
