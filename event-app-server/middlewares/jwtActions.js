const jwt = require("jsonwebtoken");
const logger = require("../utilities/logger");
const secret = require('../config/keys').secret;

module.exports = {
    validate: function(req, res, next) {
        const token = req.body.token || req.query.token || req.headers["x-access-token"];

        if (token) {
            return jwt.verify(token, secret, function(err, decoded) {
                if (err) {
                    logger.stream.write(err);
                    return res.json({
                        success: false,
                        message: "failed to authenticate token.",
                    });
                }
                req.user = decoded;
                return next();
            });
        }

        return res.unauthorized();
    }
};
