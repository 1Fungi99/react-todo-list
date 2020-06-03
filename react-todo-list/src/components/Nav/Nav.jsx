import React from "react";
import "./Nav.css";

const Nav = (props) => {
  return (
    //   React fragment
    <>
      <nav>
        <h1 className="logo">React Todo List</h1>
        <button
          className="massDelete"
          onClick={(e) => props.handleMassDelete(e)}
        >
          Mass Deletion
        </button>
      </nav>
    </>
  );
};

export default Nav;
