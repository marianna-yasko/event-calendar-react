const validation = {
    email: (value) => {
        return value.match(validationTypes.EMAIL.pattern)
    }
};

const validationTypes = {
    EMAIL: {name: 'email', pattern: '[A-Za-z]{3}}'}
};

export default validation;
