// App.js
import React from 'react';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: null, // the index of the selected day, or null if none
            tasks: [ // an array of arrays, each containing the tasks for one day
                [
                    { title: 'Do homework', description: 'Finish the react week-planner project', startTime: '10:00', endTime: '12:00' },
                    { title: 'Go to the gym', description: 'Work out for an hour', startTime: '14:00', endTime: '15:00' }
                ],
                [
                    { title: 'Meet with friends', description: 'Have lunch at the cafe', startTime: '13:00', endTime: '14:30' },
                    { title: 'Study for exam', description: 'Review the notes and do some practice questions', startTime: '16:00', endTime: '18:00' }
                ],
                // and so on for the rest of the week
            ]
        };
    }

    // a method to handle the selection of a day
    handleSelectDay = (index) => {
        this.setState({ selectedDay: index });
    }

    // a method to handle the addition of a new task
    handleAddTask = (task) => {
        // get the current tasks array
        let tasks = this.state.tasks;
        // get the index of the selected day
        let index = this.state.selectedDay;
        // add the new task to the corresponding day
        tasks[index].push(task);
        // update the state with the new tasks array
        this.setState({ tasks: tasks });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">React Week-Planner</h1>
                <Week tasks={this.state.tasks} onSelectDay={this.handleSelectDay} />
                {this.state.selectedDay !== null && (
                    <DayExpanded tasks={this.state.tasks[this.state.selectedDay]} onAddTask={this.handleAddTask} />
                )}
            </div>
        );
    }
}

export default App;
