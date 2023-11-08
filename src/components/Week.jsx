import React from 'react';
import Day from './Day';

const Week = (props) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div>
            {days.map((day, index) => (
                <div className="row" key={index}>
                    <Day day={day} tasks={props.tasks[index]} index={index} onSelectDay={props.onSelectDay} />
                </div>
            ))}
        </div>
    );
};

export default Week;
