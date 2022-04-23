import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "../Navbar.css";
import "../all.css"
import TaskList from "./TaskList";
import TaskBoard from "./TaskBoard";
import AddTask from './AddTask'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getData = () => {
    axios
      .get("http://my-json-server.typicode.com/bnissen24/project2DB/posts")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const onUpdateTaskList = (newTaskList) => {
    setTasks(newTaskList);
  };

  useEffect(() => {
    getData();
  }, []);

  const onAddTask = (taskName) => {
    let tasksList = tasks;
    tasksList.push({
      title: taskName.newTask,
      id: tasks.length + 1,
      type: "task",
      column: taskName.column,
    });
    setTasks([...tasksList]);
    alert("Task Has been Added");
  };
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TaskBoard tasks={tasks} />} />
          <Route
            exact
            path="/taskList"
            element={
              <TaskList tasks={tasks} onUpdateTaskList={onUpdateTaskList} />
            }
          />
          <Route
            exact
            path="/addTask"
            element={
              <AddTask tasks={tasks} onSubmit={onAddTask} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
