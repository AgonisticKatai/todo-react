import React from "react";

const TaskCard = props => (
  <div className="col-xs-12 col-sm-6 col-lg-4">
    <div className="card mb-4">
      <ul className="list-group list-group-flux">
        <li className="list-group-item d-inline-flex justify-content-between">
          <strong>{props.title}</strong>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => {
              props.markAsCompleted(props.id)
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default TaskCard;
