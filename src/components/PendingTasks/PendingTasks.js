import React from "react";

import TaskCard from "components/TaskCard/TaskCard";

import "./PendingTasks.css";

const PendingTasks = props => {
 return props.tasks.map(task => {
    return <TaskCard key={task.id} {...task} {...props} />;
  })
}


export default PendingTasks;
