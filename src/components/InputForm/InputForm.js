import React from "react";
import uuid from "uuid/v4";

import "./InputForm.css";

const InputForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: this.taskInput.value,
      completed: false
    };
    props.addTask(newTask);
    this.taskInput.value = "";
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <form className="form-row align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter new task..."
            name="taskInput"
            autoFocus
            required={true}
            ref={node => {
              this.taskInput = node;
            }}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
