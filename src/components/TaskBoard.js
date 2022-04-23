import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
const TaskBoard = (props) => {
  const columns = { "todo": 1, "in-progress": 2, "review": 3, "done": 4 };
  const [taskItems, setTaskItems] = useState([]);

  const todo_tasks = taskItems.filter((task) => task["column"] === "todo");
  const inProgress_tasks = taskItems.filter(
    (task) => task["column"] === "in-progress"
  );
  const review_tasks = taskItems.filter((task) => task["column"] === "review");
  const done_tasks = taskItems.filter((task) => task["column"] === "done");

  useEffect(() => {
    setTaskItems(props.tasks);
  }, [props.tasks]);

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const moveItemFromGrid = (task) => {
    const taskIndex = taskItems.findIndex((t) => t.id === task.id);
    const temp = [...taskItems];
    if (columns[task.column] + 1 <= 4) {
      console.log(columns[task.column] + 1);
      task.column = getKeyByValue(columns, columns[task.column] + 1);
      console.log("after"+task.column );
      temp[taskIndex]= task;
     
      setTaskItems(temp);
    }
  };

  const moveBackItemFromGrid = (task) => {
    const taskIndex = taskItems.findIndex((t) => t.id === task.id);
    const temp = [...taskItems];
    if (columns[task.column] - 1 >= 0) {
      task.column = getKeyByValue(columns, columns[task.column] - 1);
      temp[taskIndex]= task;
      console.log(temp);
      setTaskItems(temp);
    }
  };

  return (
    <>
      <h3>Task Board</h3>
      <div className="container2 grid-view-cont">
        <div className="row gridView">
          <div className="col-3 col-cont todo">
            <h3>To-Do</h3>
            <div className="item-container" id="todo">
              {todo_tasks.map((post) => (
                <GridItem
                  task={post}
                  key={post.id}
                  previous={""}
                  forward={"Start Work"}
                  moveItemFromGrid={moveItemFromGrid}
                  moveBackItemFromGrid={moveBackItemFromGrid}
                />
              ))}
            </div>
          </div>
          <div className="col-3 col-cont inProgress">
            <h3 className="title">In Progress</h3>
            <div className="item-container">
              {inProgress_tasks.map((post) => (
                <GridItem
                  task={post}
                  key={post.id}
                  previous={"Send back"}
                  forward={"Request Review"}
                  moveItemFromGrid={moveItemFromGrid}
                  moveBackItemFromGrid={moveBackItemFromGrid}
                />
              ))}
            </div>
          </div>
          <div className="col-3 col-cont review">
            <h3 className="title">Under Review</h3>
            <div className="item-container">
              {review_tasks.map((post) => (
                <GridItem
                  task={post}
                  key={post.id}
                  previous={"Back to Progress"}
                  forward={"Mark Done"}
                  moveItemFromGrid={moveItemFromGrid}
                  moveBackItemFromGrid={moveBackItemFromGrid}
                />
              ))}
            </div>
          </div>
          <div className="col-3 col-cont done">
            <h3 className="title">Done</h3>
            <div className="item-container">
              {done_tasks.map((post) => (
                <GridItem
                  task={post}
                  key={post.id}
                  previous={"Request Re-Review"}
                  forward={""}
                  moveItemFromGrid={moveItemFromGrid}
                  moveBackItemFromGrid={moveBackItemFromGrid}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
