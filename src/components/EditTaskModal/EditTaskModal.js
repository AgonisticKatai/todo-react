import React from "react";

const EditTaskModal = props => {

  const handleSubmit = e => {
    e.preventDefault();
    props.editTask(props.taskToEdit.id, this.editTaskInput.value);
    this.editTaskInput.value = ""
  };

  return (
    <div>
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
                Edit Task
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
            <div className="modal-body">
              <label htmlFor="recipient-name" className="col-form-label" />
              Previous content
              <div className="card">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>{props.taskToEdit.title}</strong>
                  </li>
                </ul>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    New content
                  </label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="enter new content..."
                    id="message-text"
                    name="editTaskInput"
                    ref={node => {
                      this.editTaskInput = node;
                    }}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
