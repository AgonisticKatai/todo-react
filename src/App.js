import React, { Component } from "react";

import Header from "components/Header/Header";
import InputForm from "components/InputForm/InputForm";
import PendingTasks from "components/PendingTasks/PendingTasks";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null
    };
  }

  handleAddTask = newTask => {
    this.state.tasks ? this.setState({
      tasks: [...this.state.tasks, newTask]
    }) : this.setState({
      tasks: [newTask]
    })

  };

  renderPendingTasks = () => {
    return this.state.tasks ?
      <PendingTasks tasks={this.state.tasks} /> :
      <h1>Nothing else</h1>
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputForm addTask={this.handleAddTask} />
        <div>{this.renderPendingTasks()}</div>
      </div>
    );
  }
}

export default App;
