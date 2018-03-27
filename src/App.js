/*
TODO:
- sorting tasks, done last
- clear done tasks button
- saving data to local store
- saving data to backend
*/

import React, { Component } from 'react';
import './App.css';
import AddTask from './components/add-task';
import TasksList from './components/tasks-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    this.addTask = this.addTask.bind(this);
  }
  
  addTask(task) {
    if (task) {
      const newTasks = [...this.state.tasks, task];
      this.setState({tasks: newTasks});
    }
    
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">ToDo List</h1>
        <AddTask addTask={this.addTask} />
        <TasksList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
