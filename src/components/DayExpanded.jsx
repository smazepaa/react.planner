import React from 'react';
import Task from './Task';
import NewTaskForm from './NewTaskForm';

const DayExpanded = (props) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="card expanded">
            <div className="card-body">
                {props.tasks && props.tasks.length > 0 ? (
                    props.tasks.map((task, index) => (
                        <Task task={task} key={index} onDeleteTask={() => props.onDeleteTask(index)} />
                    ))
                ) : (
                    <p className="card-text">No tasks for this day</p>
                )}
                <NewTaskForm onAddTask={props.onAddTask} />
            </div>
        </div>
    );
};

export default DayExpanded;
