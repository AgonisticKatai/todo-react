import React from "react";

import "./PendingTasks.css";

const PendingTasks = props => {
  return (
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action">
        {props.task}
      </a>
    </div>
  );
};

export default PendingTasks;
