import React from 'react';
import Button from './Button';

const Task = (props) => {
    return (
        <div className="alert alert-info d-flex justify-content-between align-items-center">
            <div>
                <h6 className="alert-heading">{props.task.title}</h6>
                <p className="mb-0">{props.task.description}</p>
                <p className="mb-0">{props.task.startTime} - {props.task.endTime}</p>
            </div>
            <Button text="Delete" onClick={() => props.onDeleteTask(props.index)} />
        </div>
    );
};

export default Task;
