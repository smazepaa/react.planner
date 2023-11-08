import React from 'react';

const Task = (props) => {
    return (
        <div className="alert alert-info">
            <h6 className="alert-heading">{props.task.title}</h6>
            <p className="mb-0">{props.task.description}</p>
            <p className="mb-0">{props.task.startTime} - {props.task.endTime}</p>
        </div>
    );
};

export default Task;