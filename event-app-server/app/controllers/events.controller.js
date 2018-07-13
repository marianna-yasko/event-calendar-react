const utilities = require('../../utilities');
const repository = require('../reposes/events.repos');

const eventsActions = {
    create: async(req, res) => {
        try {
            const { user } = req;
            const event = await repository.createEvent(user, req.body);
            res.success(event);
        }
        catch(err) {
            res.send(err);
        }
    },
    update: (req, res) => {
        res.success();
    },
    remove: (req, res) => {
        res.success();
    },
    getAll: async(req, res) => {
        try {
            const events = await repository.fetchEvents();
            res.success(events);
        } catch (err) {
            res.send(err);
        }
    }
};

module.exports = eventsActions;