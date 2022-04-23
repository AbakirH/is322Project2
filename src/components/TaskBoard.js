import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";

const TaskBoard = (props) => {
  const columns = { "todo": 0, "in-progress": 1, "review": 3, "done": 4 };
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    setTaskItems(props.tasks);
  }, [props.tasks, taskItems]);
  
  const backOrForward = (num, help) => {
    if (help === "back") {
        num = num - 1;
        if (num < 0) {
          num = 0;
        }
        return num;
      }
    if (help === "next") {
      num = num + 1;
      if (num > 4) {
        num = 4;
      }
      return num;
    }
    
  };
  const moveItemFromGrid = (task) => {
    const taskIndex = taskItems.findIndex((t) => t.id === task.id);
    console.log();
    
  };
  const moveItem = (post, previous, forward) => {
    return (
      <GridItem
        id={post.id}
        key={post.id}
        title={post.title}
        type={post.type}
        column={post.column}
        back={backOrForward(columns[post.column], "back")}
        previous={previous}
        next={backOrForward(columns[post.column], "next")}
        forward={forward}
        moveItemFromGrid={moveItemFromGrid}
      />
    );
  };
  const todo_tasks = props.tasks.filter((task) => task["column"] === "todo");
  const inProgress_tasks = props.tasks.filter(
    (task) => task["column"] === "in-progress"
  );
  const review_tasks = props.tasks.filter(
    (task) => task["column"] === "review"
  );
  const done_tasks = props.tasks.filter((task) => task["column"] === "done");

  const todo_list = todo_tasks.map((post) =>
    moveItem(post, "", "Start Work")
  );
  const inProgress_list = inProgress_tasks.map((post) =>
    moveItem(post, " Send back ", "Request Review ")
  );
  const review_list = review_tasks.map((post) =>
    moveItem(post, " Back to Progress", "Mark Done ")
  );
  const done_list = done_tasks.map((post) =>
    moveItem(post, "Request Re-Review", "")
  );
  return (
      <>
    <h3>Task Board</h3>
    <div className="container2 grid-view-cont">
      
      <hr className="hr" />
      <div className="row gridView">
        <div className="col-3 col-cont todo">
          <h3>To-Do</h3>
          <div className="item-container" id="todo">
            {todo_list}
          </div>
        </div>
        <div className="col-3 col-cont inProgress">
          <h3 className="title">In Progress</h3>
          <div className="item-container">{inProgress_list}</div>
        </div>
        <div className="col-3 col-cont review">
          <h3 className="title">Under Review</h3>
          <div className="item-container">{review_list}</div>
        </div>
        <div className="col-3 col-cont done">
          <h3 className="title">Done</h3>
          <div className="item-container">{done_list}</div>
        </div>
      </div>
    </div></>
  );
};

export default TaskBoard;
