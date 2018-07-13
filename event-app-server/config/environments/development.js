const secret = require("../keys");

module.exports = {
    host: "127.0.0.1",
    port: 1234,
    mongoUrl: "mongodb://localhost:27017/projectDbName",
    logLevel: "debug",
    secret: secret.secret,
};
