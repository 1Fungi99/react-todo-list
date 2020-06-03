import React from "react";
import "./To-do-item.css";

const ToDoItem = (props) => {
  return (
    <li key={props.mapKey} id={props.mapKey}>
      <div>
        <p className="to_do_item">{props.cur}</p>
        <p className="delete_button" onClick={() => props.handleDelete()}>
          Delete
        </p>
        <hr className="line" />
      </div>
    </li>
  );
};

export default ToDoItem;
