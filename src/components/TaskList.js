import React, { useState, useEffect } from "react";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const TaskList = (props) => {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    setTaskItems(props.tasks);
  }, [props.tasks, taskItems]);

  const markDone = (task) => {
    const taskIndex = taskItems.findIndex((t) => t.id === task.id);
    let taskList = taskItems;
    taskItems.splice(taskIndex, 1);
    console.log(props);
    props.onUpdateTaskList(taskList);
    setTaskItems([...taskList]);
  };

  return (
    <>
    <h1>List-View</h1>
      <ul className="task-list list-group">
        <div className="task-titles">
        <p>Title</p>
        <p>Status</p>
        <p>Type</p>
        <p></p>
        </div>
        {taskItems.map((task) => (
          <TaskItem task={task} key={task.id} markDone={markDone} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
