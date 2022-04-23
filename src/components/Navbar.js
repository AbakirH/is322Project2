import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const goTaskBoard = () => {
    navigate("/");
  };
  const goTaskList = () => {
    navigate("/TaskList");
  };
  const goAddTask = () => {
    navigate("/AddTask");
  };


  return (
    <nav id="nav">
      <div id="first">
        <h1 id="navTitle">Task Manager</h1>
      </div>
      <div id="second">
        <button className="navbarButton" onClick={goTaskBoard} type="submit">
          TaskBoard
        </button>
        <button className="navbarButton" onClick={goTaskList} type="submit">
          TaskList
        </button>
        <button className="navbarButton" onClick={goAddTask} type="submit">
          Add Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
