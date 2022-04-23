/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";

const render_button = (id, column_name, button_text, moveItemFromGrid) => {
  if (button_text) {
    return (
      <div className="button">
        <a href="#"
          className="btn btn-primary"
          role="button"
          onClick={moveItemFromGrid(id)}>
          {button_text}
        </a>
      </div>
    );
  } else {
    return <div />;
  }
};


const GridItem = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">ID: {props.id}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Type: {props.type}</h6>
        <div className="btn-cont">
          <div className="back">
            {console.log(props.back)}
            {render_button(props.id, props.column, props.previous, props.moveItemFromGrid,)}
          </div>
          <div className="forward">
            {render_button(props.id, props.column, props.forward, props.moveItemFromGrid)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
