import React from "react";

import TaskCard from "components/TaskCard/TaskCard";

import "./CompletedTasks.css";

const CompletedTasks = props => {
   return props.tasks.map(task => {
    return <TaskCard key={task.id} {...task} />;
  })
}

export default CompletedTasks;
