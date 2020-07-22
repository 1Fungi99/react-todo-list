import React from "react";

import "./Item-list.css";

const Item_List = (props) => {
  return (
    //   Start react fragment
    <>
      <form onSubmit={props.handleSubmit}>
        {/* User input */}
        <input
          className="blackout"
          id="input"
          type="text"
          placeholder="What to do?"
          // e.target.value targets the text being written, then being passed up to Main.jsx
          onChange={(e) => props.handleChange(e.target.value)}
          defaultValue=""
        />
        {/* callback to check the value of input, then sent to To-do item array */}
        <button className="submit_button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
  //   End react fragment
};

export default Item_List;
