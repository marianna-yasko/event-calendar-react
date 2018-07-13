const validateToken = require('../middlewares/jwtActions').validate;
const eventsRouter = require('./routers/events');
// const usersRouter = require('./routers/users');

module.exports = (app) => {
    app.use('/events', validateToken, eventsRouter);
    // app.use('/users', usersRouter);
};
