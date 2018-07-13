const config = require('./index');
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(config.mongoUrl, {useMongoClient: true});
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
};

function cleanup() {
    mongoose.connection.close(function() {
        process.exit(0);
    });
}
