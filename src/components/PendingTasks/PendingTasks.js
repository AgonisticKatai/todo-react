import React, { Component } from "react";

import TaskCard from "components/TaskCard/TaskCard";
import EditTaskModal from "components/EditTaskModal/EditTaskModal";

class PendingTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleEditTask = (id, title) => {
    this.setState({ id, title });
  };

  render() {
    return (
      <div>
        <EditTaskModal {...this.props} taskToEdit={this.state} />
        {this.props.tasks.map(task => {
          return (
            <TaskCard
              hidden={false}
              taskToEdit={this.handleEditTask}
              key={task.id}
              {...task}
              {...this.props}
            />
          );
        })}
      </div>
    );
  }
}

export default PendingTasks;
