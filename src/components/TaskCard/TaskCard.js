import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const TaskCard = props => (
  <div className="card mx-2 mt-2">
    <ul className="list-group list-group-flux">
      <li className="d-flex align-items-center">
        <strong className="mr-auto ml-2">{props.title}</strong>
        <button
          type="button"
          className="btn btn-outline-success btn-sm my-2 mr-1"
          onClick={() => props.markAsCompleted(props.id)}
        >
          <FontAwesomeIcon icon="check-circle" />
        </button>
        <button
          type="button"
          className="btn btn-outline-primary btn-sm my-2 mr-1"
          data-toggle="modal"
          data-target="#editModal"
          onClick={() => props.taskToEdit(props.id, props.title)}
        >
          <FontAwesomeIcon icon="edit" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm my-2 mr-2"
          onClick={() => props.removeTask(props.id)}
        >
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </li>
    </ul>
  </div>
);

export default TaskCard;
