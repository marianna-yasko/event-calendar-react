const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const customResponses = require( "./middlewares/customResponses");
const logger = require("./utilities/logger");
const app = express();
const port = process.env.PORT || config.port;
const ENV = process.env.NODE_ENV || config.env;

console.log(port);

app.set("env", ENV);
const appDeps = [bodyParser.json(), customResponses];
function indicateDeps(deps) {
    for (let i = 0; i < deps.length; i++) {
        app.use(deps[i]);
    }
}
indicateDeps(appDeps);

const mongoose = require("./config/mongoose");
app.set('mongoose', mongoose);
// require("./app")(app);
const publicF = require('./public');
app.use('/', publicF);

app.use((req, res) => {
    res.notFound();
});

app.use((err, req, res, next) => {
    logger.stream.write(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(503).json({
        success: false,
        error: "server_error",
    });
});

app.listen(port, () => {
    logger.stream.write(`Listening on port ${ port}`);
});
