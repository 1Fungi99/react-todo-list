import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Item_List from "../Item List/Item-list";
import ToDoItem from "../To-do Item/To-do-item";

const Main = () => {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);

  // Setting input to user's input
  const handleChange = (str) => {
    setInput(str);
  };

  // console.logging current input
  const handleSubmit = (e) => {
    // preventing page reload
    e.preventDefault();

    // ternary to check if there is actual data in the input
    input ? setItemList(itemList.concat(input)) : console.log("error");
  };

  //individual deletion of entries
  const handleDelete = () => {
    console.log("Fire");
  };

  //handles mass deletion button on nav component
  const handleMassDelete = (e) => {
    // preventing page reload
    e.preventDefault();

    // resets itemList array to empty
    setItemList([]);
    console.log("Mass Deletion Accomplished");
  };

  return (
    //   Start react fragment
    <>
      <Nav handleMassDelete={handleMassDelete} />
      <Item_List handleChange={handleChange} handleSubmit={handleSubmit} />
      <ul>
        {itemList.map((cur, i) => (
          <ToDoItem cur={cur} mapKey={i} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
    //   End react fragment
  );
};

export default Main;
