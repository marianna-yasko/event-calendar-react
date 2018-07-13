import storage from '../services/storage';

const initialState = {
    events: storage.restore('events') || [],
    user: storage.restore('user') || {}
};

export default initialState;