import React from "react";

const GridItem = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.task.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID: {props.task.id}</h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Type: {props.task.type}
        </h6>
        <div className="btn-cont">
          <div className="back">
            {props.previous !== "" ? (
              <button
                className="btn btn-primary"
                onClick={() => props.moveBackItemFromGrid(props.task)}
              >
                {props.previous}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="forward">
            {props.forward !== "" ? (
              <button
                className="btn btn-primary"
                onClick={() => props.moveItemFromGrid(props.task)}
              >
                {props.forward}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
