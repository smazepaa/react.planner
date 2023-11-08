import React from 'react';
import Day from './Day';

const Week = (props) => {
    // an array of the names of the days of the week
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="col">
            {days.map((day, index) => (
                <div className="row" key={index}>
                    <Day day={day} tasks={props.tasks[index]} index={index} onSelectDay={props.onSelectDay} />
                </div>
            ))}
        </div>
    );
};

export default Week;
