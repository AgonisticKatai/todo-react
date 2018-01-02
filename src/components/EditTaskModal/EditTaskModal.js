import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const EditTaskModal = () => (
  <div>
    <button
      type="button"
      className="btn btn-outline-primary btn-sm my-2 mr-1"
      data-toggle="modal"
      data-target="#editModal"
    >
      <FontAwesomeIcon
        icon="edit"
        onClick={() => {
          console.log("edit...");
        }}
      />
    </button>
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EditTaskModal;
