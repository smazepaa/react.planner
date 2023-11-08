import React, { useState } from 'react';

const NewTaskForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'startTime':
                setStartTime(value);
                break;
            case 'endTime':
                setEndTime(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let newTask = {
            title: title,
            description: description,
            startTime: startTime,
            endTime: endTime,
        };

        props.onAddTask(newTask);
        setTitle('');
        setDescription('');
        setStartTime('');
        setEndTime('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={description} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="startTime">Start Time</label>
                <input type="time" className="form-control" id="startTime" name="startTime" value={startTime} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="endTime">End Time</label>
                <input type="time" className="form-control" id="endTime" name="endTime" value={endTime} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-success">Add Task</button>
        </form>
    );
};

export default NewTaskForm;
