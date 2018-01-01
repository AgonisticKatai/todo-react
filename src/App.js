import React, { Component } from "react";

import Header from "components/Header/Header";
import InputForm from "components/InputForm/InputForm";
import TasksContainer from "components/TasksContainer/TasksContainer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null
    };
  }

  handleAddTask = newTask => {
    this.state.tasks
      ? this.setState({
          tasks: [...this.state.tasks, newTask]
        })
      : this.setState({
          tasks: [newTask]
        });
  };

  handleMarkAsCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) task.completed = true
        return task
      })
    })
  };

  renderTasks = () => {
    return this.state.tasks ? (
      <TasksContainer
        {...this.state}
        markAsCompleted={this.handleMarkAsCompleted}
      />
    ) : (
      <h1>Any tasks yet...</h1>
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm addTask={this.handleAddTask} />
        <div>{this.renderTasks()}</div>
      </div>
    );
  }
}

export default App;
