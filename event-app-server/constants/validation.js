module.exports = {
    email: {
        name: "email",
        rules: [notEmpty, {...pattern, ...'[A-Za-z]{3}}'}]
    },
    name: {
        name: "name",
        rules: [notEmpty, condition]
    },
    date: {
        name: "date",
        rules: [condition]
    }
};

function notEmpty(value) {
    if (value) {
        return String(value) !== '' && String(value).length > 0;
    }
    return false;
}

function pattern(value, template) {
    return template.exec(value);
}
