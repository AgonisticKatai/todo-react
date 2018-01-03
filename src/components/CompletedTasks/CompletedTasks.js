import React from "react";

import TaskCard from "components/TaskCard/TaskCard";

import "./CompletedTasks.css";

const CompletedTasks = props => {
  const hidden = true

  return props.tasks.map(task => {
    return <TaskCard hidden={hidden} key={task.id} {...task} {...props} />;
  });
};

export default CompletedTasks;
