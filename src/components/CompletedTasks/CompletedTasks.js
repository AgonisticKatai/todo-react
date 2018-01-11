import React from "react";

import TaskCard from "components/TaskCard/TaskCard";

const CompletedTasks = props => {

  return props.tasks.map(task => {
    return <TaskCard hidden={true} key={task.id} {...task} {...props} />;
  });
};

export default CompletedTasks;
