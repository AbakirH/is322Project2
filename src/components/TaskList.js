import React, { useState, useEffect,useRef } from "react";

import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const [taskItems, setTaskItems] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState( [...taskItems ])
	const nameRef = useRef(null);
	const statusRef = useRef(null);
	const typeRef = useRef(null)

  useEffect(() => {
    setTaskItems(props.tasks);
    setFilteredTodos(props.tasks);
  }, [props.tasks]);

  const markDone = (task) => {
    const taskIndex = taskItems.findIndex((t) => t.id === task.id);
    let taskList = taskItems;
    taskItems.splice(taskIndex, 1);
    console.log(props.tasks);
    props.onUpdateTaskList(taskList);
    setTaskItems([...taskList]);
  };

  const filterByName=(e)=>
	{
		const value = e.currentTarget.value;
		const temp = [...taskItems];
    if(value === "asc") {
      setFilteredTodos(temp.sort((a,b) => (a.title < b.title ? -1 : 1)))
		} else if(value === "desc"){
      setFilteredTodos(temp.sort((a, b) => (a.title > b.title ? -1 : 1)))
		}
	
	}
  const filteredByStatus=(e)=>{
		const status = e.currentTarget.value;
		const temp = [...taskItems]
		if(status !== "default") {
			setFilteredTodos(temp.filter(todo => todo["column"] === status))
		} else {
			setFilteredTodos([...taskItems])
		}
	}

  const filterByType=(e)=>{
		const type = e.currentTarget.value;
		const temp = [...taskItems];
		if(type !== "default") {
			setFilteredTodos(temp.filter(todo => todo["type"] === type))
		} else{
			setFilteredTodos([...taskItems])
		}
	}

  return (
    <>
    <h1>List-View</h1>
      <ul className="task-list list-group">
      <div className="task-titles">
					<select className="bg-slate-800 p-2" id="filterByName" onChange={(e) => filterByName(e)} ref={nameRef}>
            <option value="default">Sort by Title</option>
						<option value="asc">Name: A - Z</option>
						<option value="desc">Name: Z - A</option>
					</select>
          <select className="bg-slate-800 p-2" id="filterByStatus" onChange={(e) => filteredByStatus(e)} ref={statusRef}>
            <option value="default">Sort by Status</option>
						<option value="todo">Todo</option>
						<option value="in-progress">In Progress</option>
						<option value="review">Review</option>
						<option value="done">Done</option>
					</select>
          <select className="bg-slate-800 p-2" id="filterByStatus" onChange={(e) => filterByType(e)} ref={typeRef}>
            <option value="default">Sort by Type</option>
						<option value="feature">Feature</option>
						<option value="bug">Bug</option>
						<option value="task">Task</option>
					</select>
			</div>
        <div className="task-titles">
        <p>Title</p>
        <p>Status</p>
        <p>Type</p>
        <p></p>
        </div>
        {filteredTodos.map((task) => (
          <TaskItem task={task} key={task.id} markDone={markDone} />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
