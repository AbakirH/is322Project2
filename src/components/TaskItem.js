import React from 'react';

const TaskItem = props => {
  return (
    <li className="list-group-item">
      <p>Task Title: { props.task.title }</p>
      <p>Status: {props.task.column}</p>
      <p>Type: {props.task.type}</p>
            <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
        </button>
    </li>
  )
};

export default TaskItem;