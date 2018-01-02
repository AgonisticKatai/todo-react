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

  handleEditTask = (taskId, titleEdited) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) task.title = titleEdited;
        return task;
      })
    });
  };

  handleMarkAsCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) task.completed = true;
        return task;
      })
    });
  };

  renderTasks = () => {
    return this.state.tasks ? (
      <TasksContainer
        {...this.state}
        markAsCompleted={this.handleMarkAsCompleted}
        editTask={this.handleEditTask}
      />
    ) : (
      <div>
        <h1 className="display-4 text-center">...</h1>
      </div>
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
