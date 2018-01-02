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
        <div className="col-xs-12 col-sm-6 col-lg-6">
          <div className="card text-center">
            <div className="card-header">Pending Tasks</div>
            <PendingTasks
              tasks={pendingTasks}
              markAsCompleted={props.markAsCompleted}
            />
            <div className="card-footer text-muted mt-2">
              {pendingTasks.length} tasks left
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-6">
          <div className="card text-center">
            <div className="card-header">Completed Tasks</div>
            <CompletedTasks tasks={completedTasks} />
            <div className="card-footer text-muted mt-2">
              {completedTasks.length} tasks done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
