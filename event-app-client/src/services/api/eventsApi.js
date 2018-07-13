const eventsApi = {
    url: (requestType) => {
        return `http://localhost:1234/events/${requestType}`;
    }
};

export default eventsApi;
