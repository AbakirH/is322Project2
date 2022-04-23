import React, { useState } from "react";

const AddTask = (props) => {
  const [newTask, setNewTask] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(newTask);
    setNewTask("");
  };

  const onChange = (e) => {
    console.log(newTask);
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      "column":"todo",
    });
  };

  const handleSelect=(e)=>{
    setNewTask({
      ...newTask,
      "column": e.target.value,
    });
    console.log(newTask);
  }

  return (
    <form className="task-input form-group" onSubmit={onFormSubmit}>
      <h1 htmlFor="newTask">Enter New Task</h1>
      <input
        type="text"
        className="form-control"
        name="newTask"
        onChange={onChange}
      />
       <select onChange={handleSelect} name="column" id="task-progress">
        <option value="todo">todo</option>
        <option value="in-progress">In-Progress</option>
        <option value="review">Review</option>
        <option value="done">Done</option>
      </select>
      <input className="formButton" type="submit" value="Submit"/>
    </form>
  );
};

export default AddTask;
