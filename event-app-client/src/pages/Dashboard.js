import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions/eventsActions';
import CalendarComponent from '../components/Calendar';
import PropTypes from 'prop-types';
const DEFAULT_EVENTS = [
    {
        name: "Event1",
        id: '234354325',
        date: '10-20-2016'
    },
    {
        name: "Event2",
        id: '234354325',
        date: '10-20-2016'
    }
];

export class DashboardPage extends React.Component {
    componentWillMount() {
        // fetch events
    }
    renderCalendar() {
        return <div>
           <CalendarComponent events={this.props.events || DEFAULT_EVENTS} />
        </div>
    }
    render() {
        return (
            <div className="text-center">
                <h1>Home page</h1>
                <div>
                    {this.props.events || DEFAULT_EVENTS?
                        this.renderCalendar() :
                        <p>No received events</p>
                    }
                </div>
            </div>
        )
    }
}

DashboardPage.PropTypes = {
    events: PropTypes.array
};

function mapStateToProps(state) {
    return {
        events: state.events
    }
}

function mapDispatchToProps(dispatch) {
    return {
        eventActions: bindActionCreators({fetchEvents}, dispatch)
    }
}

const Dashboard = connect (
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);

export default Dashboard;
