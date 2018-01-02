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
        if (task.id === taskId) task.completed = true;
        return task;
      })
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

  handleRemoveTask = taskId => {
    let indexToDelete = "";
    const tasks = this.state.tasks.map((task, index) => {
      if (task.id === taskId) indexToDelete = index;
      return task;
    });
    tasks.splice(indexToDelete, 1);
    this.setState({ tasks });
  };

  renderTasks = () => {
    return this.state.tasks ? (
      <TasksContainer
        {...this.state}
        markAsCompleted={this.handleMarkAsCompleted}
        editTask={this.handleEditTask}
        removeTask={this.handleRemoveTask}
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
