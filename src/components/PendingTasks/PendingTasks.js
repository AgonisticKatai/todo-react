import React from "react";

import "./PendingTasks.css";

const PendingTasks = props => (
  <div>
    { props.tasks.map(task => {
      return (
        <div key={task.id} className="list-group">
          <a href="" className="list-group-item list-group-item-action">
            { task.title }
          </a>
        </div>
      )
    })}
  </div>
)

export default PendingTasks;
