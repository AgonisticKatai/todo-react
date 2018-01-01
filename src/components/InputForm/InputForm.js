import React from "react";
import uuid from "uuid/v4"

import "./InputForm.css";

const InputForm = props => {

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: this.taskInput.value,
      completed: false
    }
    props.addTask(newTask)
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline" onSubmit={ handleSubmit }>
        <div className="form-group">
          <input
            type="text"
            className="form-control my-5 mr-sm-2"
            placeholder="Enter new task"
            name="taskInput"
            autoFocus
            required={true}
            ref={ node => { this.taskInput = node }}
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
