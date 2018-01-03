import React, { Component } from "react";

import Header from "components/Header/Header";
import InputForm from "components/InputForm/InputForm";
import TasksContainer from "components/TasksContainer/TasksContainer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  handleAddTask = newTask => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  };

  handleMarkAsCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) task.completed = true;
        return task;
      })
    });
  };

  handleMarkAllAsCompleted = () => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        task.completed = true;
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
    this.setState({
      tasks: this.state.tasks.filter(task => {
        if (task.id === taskId) return false;
        return task;
      })
    });
  };

  handleCleanCompletedList = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm addTask={this.handleAddTask} />
        <TasksContainer
          {...this.state}
          markAsCompleted={this.handleMarkAsCompleted}
          markAllAsCompleted={this.handleMarkAllAsCompleted}
          editTask={this.handleEditTask}
          removeTask={this.handleRemoveTask}
          cleanList={this.handleCleanCompletedList}
        />
      </div>
    );
  }
}

export default App;
