import React from "react";
import PendingTasks from "components/PendingTasks/PendingTasks";
import CompletedTasks from "components/CompletedTasks/CompletedTasks";

const TasksContainer = props => {
  const pendingTasks = props.tasks.filter(task => {
    return !task.completed;
  });
  const completedTasks = props.tasks.filter(task => {
    return task.completed;
  });
  return (
    <div className="container">
      <div className="row">
        <h1>Pending Tasks</h1>
        <PendingTasks
          tasks={pendingTasks}
          markAsCompleted={props.markAsCompleted}
        />
      </div>
      <div className="row">
        <h1>Completed Tasks</h1>
        <CompletedTasks tasks={completedTasks} />
      </div>
    </div>
  );
};

export default TasksContainer;
