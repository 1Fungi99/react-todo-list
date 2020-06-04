import React from "react";
import "./To-do-item.css";

const ToDoItem = (props) => {
  return (
    <li className="list_item">
      <div>
        <p id={props.current_array_entry} className="to_do_item">
          {props.current_array_entry}
        </p>

        <p
          className="complete_to_do"
          onClick={() => props.handleComplete(props.current_array_entry)}
        >
          Toggle Complete
        </p>
        <p
          className="delete_button"
          onClick={() =>
            props.handleDelete(props.index, props.current_array_entry)
          }
        >
          Delete
        </p>
        <hr className="line" />
      </div>
    </li>
  );
};

export default ToDoItem;
