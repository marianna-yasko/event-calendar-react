const validation = require('../constants/validation');

module.exports = {
    validate(type, value) {
        return validateValue(validation[type], value);
    }
};

function validateValue(template, value) {

}
