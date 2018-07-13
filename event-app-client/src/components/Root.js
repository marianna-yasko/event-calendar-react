import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DashboardPage } from '../pages/Dashboard';
import LoginPage from '../pages/Login'

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route path='/dashboard' component={DashboardPage} />
            <Route path='/' component={LoginPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
