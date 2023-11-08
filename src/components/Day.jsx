import React from 'react';
import Task from './Task';
import Button from './Button';

const Day = (props) => {

    const handleSelectDay = () => {
        props.onSelectDay(props.index);
    };

    return (
        <div className="card" onClick={handleSelectDay}>
            <div className="card-header">
                <h5 className="card-title">{props.day}</h5>
            </div>
            <div className="card-body">
                {props.tasks && props.tasks.length > 0 ? (
                    props.tasks.map((task, index) => (
                        <Task task={task} key={index} />
                    ))
                ) : (
                    <p className="card-text">No tasks for this day</p>
                )}
            </div>
        </div>
    );
};

export default Day;
