const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const User = mongoose.model('User');

const createEvent = async(user, data) => {
    const { id } = user;
    const event = new Event(data);
    event.ownerId = await User.findOne({ id });
    const query = await event.save();
    return query;
};

const fetchEvents = () => {
    Event.find();
};

module.exports = {
    createEvent,
    fetchEvents
};
