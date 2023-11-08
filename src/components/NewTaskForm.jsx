import React from 'react';

class NewTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', // the title of the new task
            description: '', // the description of the new task
            startTime: '', // the start time of the new task
            endTime: '', // the end time of the new task
            duration: 0 // the expected duration of the new task in minutes
        };
    }

    // a method to handle the change of the input fields
    handleChange = (event) => {
        // get the name and value of the input field
        let name = event.target.name;
        let value = event.target.value;
        // update the state with the new value
        this.setState({ [name]: value });
    }

    // a method to handle the submission of the form
    handleSubmit = (event) => {
        // prevent the default behavior of the form
        event.preventDefault();
        // create a new task object with the state values
        let newTask = {
            title: this.state.title,
            description: this.state.description,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            duration: this.state.duration
        };
        // call the onAddTask prop function with the new task object
        this.props.onAddTask(newTask);
        // reset the state to the initial values
        this.setState({
            title: '',
            description: '',
            startTime: '',
            endTime: '',
            duration: 0
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime">Start Time</label>
                    <input type="time" className="form-control" id="startTime" name="startTime" value={this.state.startTime} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime">End Time</label>
                    <input type="time" className="form-control" id="endTime" name="endTime" value={this.state.endTime} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration (minutes)</label>
                    <input type="number" className="form-control" id="duration" name="duration" value={this.state.duration} onChange={this.handleChange} required />
                </div>
                <button type="submit" className="btn btn-success">Add Task</button>
            </form>
        );
    }
}

export default NewTaskForm;
