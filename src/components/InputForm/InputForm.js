import React from "react";

import "./InputForm.css";

const InputForm = props => {

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = this.taskInput.value;
    props.addTask(newTask)
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control my-2 mr-sm-2"
            placeholder="Enter new task"
            name="taskInput"
            autoFocus
            ref={node => {
              this.taskInput = node;
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Add task
        </button>
      </form>
    </div>
  );
}

export default InputForm;
