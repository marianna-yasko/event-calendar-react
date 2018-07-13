import React from 'react';
import PropTypes from 'prop-types';

export default class CalendarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: props.events || [],
            dateTemplate: this.generateCalendarCells()
        };
        console.log(this.state.dateTemplate);
    }
    generateCalendarCells() {
        const years = [], months = [], days = [];
        const yearTemplate = '2010';
        let i = 0;
        while (i < 9) {
            i++;
            let year = yearTemplate.split('');
            year[3] = i;
            years.push(Number(year.join('')));
        }
        i = 0;
        while(i < 12) {
            i++;
            months.push(i);
        }
        i = 0;
        while(i < 30) {
            i++;
            days.push(i);
        }
        let dateTemplate = {
            years: years,
            months: months,
            days: days
        };
        const daysTemplate = [
            {label: 'md', value: []},
            {label: 'md', value: []},
            {label: 'md', value: []},
            {label: 'md', value: []},
            {label: 'md', value: []},
            {label: 'st', value: []},
            {label: 'sn', value: []},
        ];
        function getDate(argument) {
            const calendar = [];
            for (let i = 0; i < argument.years.length; i++) {
                const yearCell = [];
                for (let m = 0; m < argument.months.length; m++) {
                    yearCell.push({month: {id: m, active: m === 0, days:
                        [
                            {label: 'md', value: []},
                            {label: 'th', value: []},
                            {label: 'we', value: []},
                            {label: 'th', value: []},
                            {label: 'fr', value: []},
                            {label: 'st', value: []},
                            {label: 'sn', value: []},
                        ]
                    }, index: argument.years});
                    let daysCount = 0;
                    for (let o = 0; o <= 4; o++) {
                        for (let s = 0; s < (daysTemplate.length - 1); s++) {
                            daysCount++;
                            if (daysCount > 29) {
                                break;
                            }
                            const date = new Date(argument.years[i], argument.months[m], argument.days[daysCount]);
                            yearCell[m].month.days[s].value.push(date.toISOString());
                        }
                    }
                }
                calendar.push(yearCell);
            }
            return calendar;
        }
        function parseDay() {}
        let calendarTemplate = getDate(dateTemplate);
        return calendarTemplate.map((year, index) => {
            year = {
                months: year,
                active: false
            };
            if (index === 0) {
                year.active = true;
            }
            return year;
        });
    }
    changeCalendarDirection(direction, destination) {
        function goPrev() {

        }
        function goNext() {

        }
        direction === 'prev' ? goPrev() : goNext();
    }
    cellTriggerEvent(e) {
        console.log(e);
    }
    render() {
        return (
            <div>
                <div className="calendar">
                    {this.state.dateTemplate.map((year, id) => {
                        return (
                        <table className={'table table-stripped' + (year.active? '' : ' hidden')}
                               key={id}>
                            <thead>{year.index}</thead>
                            {year.months.map((month, id2) => {
                                return (
                                    <tbody key={id2} className={(month.month.active? '' : ' hidden')}>
                                        {month.month.days.map((day, id2) => {
                                            return (
                                                <tr key={id2}>
                                                    <th>{day.label}</th>
                                                    {day.value.map((day, id3) => {
                                                        return (
                                                            <th scope="col" key={id3}
                                                                onClick={() => this.cellTriggerEvent('uid' + month.id + day.label)}
                                                                id={'uid' + month + day}>
                                                                <div>{day}</div>
                                                            </th>
                                                        )
                                                     })}
                                                </tr>
                                            )
                                        })}
                                        <tr className="text-center mr-20 table-actions">
                                            <button className="btn btn-warning table-button">previous</button>
                                            <button className="btn btn-warning table-button">next</button>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                        )
                    })}
                </div>
            </div>
        )
    }
}

CalendarComponent.PropTypes = {
    events: PropTypes.array
};
