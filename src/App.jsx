import React from 'react';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: null,
            tasks: [
                [
                    { title: 'Do homework', description: 'Finish the react week-planner project', startTime: '10:00', endTime: '12:00' },
                    { title: 'Go to the gym', description: 'Work out for an hour', startTime: '14:00', endTime: '15:00' }
                ],
                [
                    { title: 'Meet with friends', description: 'Have lunch at the cafe', startTime: '13:00', endTime: '14:30' },
                    
                ],
                [
                    { title: 'Study for exam', description: 'Review the notes and do some practice questions', startTime: '16:00', endTime: '18:00' }
                ],
                [],
                [
                    { title: 'Take Ammy to school', description: 'Drop Ammy at school for classes', startTime: '07:30', endTime: '08:00' }
                ],
                [],
                []
            ]
        };
    }

    handleSelectDay = (index) => {
        this.setState({ selectedDay: index });
    }

    handleAddTask = (task) => {
        let tasks = this.state.tasks;
        let index = this.state.selectedDay;
        tasks[index].push(task);
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
