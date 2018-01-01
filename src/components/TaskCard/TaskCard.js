import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const TaskCard = props => (
  <div className="card mx-2 mt-2">
    <ul className="list-group list-group-flux">
      <li className="list-group-item d-inline-flex align-items-center justify-content-between">
        <strong>{props.title}</strong>

        <FontAwesomeIcon
          icon="check-circle"
          onClick={() => {
            props.markAsCompleted(props.id);
          }}
        />
      </li>
    </ul>
  </div>
);

export default TaskCard;
