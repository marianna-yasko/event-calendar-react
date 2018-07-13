const storage = {
    restore(type) {
        switch (type) {
            case 'user': {
                return JSON.parse(localStorage.getItem('user'));
            }
            case 'events': {
                return JSON.parse(localStorage.getItem('events'));
            }
        }
    },
    store(type, value) {
        switch (type) {
            case 'user': {
                JSON.stringify(localStorage.setItem('user', value));
                return `${type} saved`;
            }
            case 'events': {
                JSON.stringify(localStorage.setItem('events', value));
                return `${type} saved`;
            }
        }
    }
};

export default storage;