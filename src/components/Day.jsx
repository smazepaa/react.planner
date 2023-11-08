import React from 'react';

const Day = (props) => {

    const handleSelectDay = () => {
        props.onSelectDay(props.index);
    };


    const tasks = props.tasks || [];
    const totalDuration = tasks.reduce((total, task) => {

        const start = new Date("2000-01-01T" + task.startTime + ":00");
        const end = new Date("2000-01-01T" + task.endTime + ":00");

        const duration = (end - start) / (1000 * 60);

        return total + duration;
    }, 0);

    return (
        <div className="card" onClick={handleSelectDay}>
            <div className="card-header">
                <h5 className="card-title">{props.day}</h5>
                <p className="card-subtitle">{tasks.length} tasks, total duration: {Math.round(totalDuration)} minutes</p>
            </div>
        </div>
    );
};

export default Day;
