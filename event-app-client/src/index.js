import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createStore from './store/createStore';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
require('./styles/bootstrap/dist/css/bootstrap.css');
require('./index.css');

const store = createStore();

render(
    <Root store={store} />,
    document.getElementById('app')
);

registerServiceWorker();
