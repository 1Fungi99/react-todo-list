import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Item_List from "../Item List/Item-list";
import ToDoItem from "../To-do Item/To-do-item";
import Footer from "../Footer/Footer";

import "./Main.css";

const Main = () => {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [completeArray, setCompleteArray] = useState([]);

  useEffect(() => {
    console.log("useEffects log:");
    // mapping through itemList and completeArray to see if the elements have been deleted
    // used for refreshing all li elements and their "active"
    itemList.map((cur) => {
      if (completeArray.includes(cur)) {
        let target = document.getElementById(cur);
        target.className = "to_do_item active";
      } else {
        let target = document.getElementById(cur);
        target.className = "to_do_item";
      }
    });

    // logging useEffect's data
    console.log("itemList: ");
    console.log(itemList);
    console.log("completeArray: ");
    console.log(completeArray);
  });

  // Setting input to user's input
  const handleChange = (str) => {
    setInput(str);
  };

  // console.logging current_array_entry input
  const handleSubmit = (e) => {
    // preventing page reload
    e.preventDefault();

    // ternary to check if there is actual data in the input
    input && !itemList.includes(input)
      ? handleConcat(input)
      : console.log("error");
  };

  const handleConcat = (e) => {
    document.getElementById("input").value = "";
    setItemList(itemList.concat(e));
  };

  //individual deletion of entries
  const handleDelete = (delete_index, strike_through_delete) => {
    // setting new array for deletion
    let post_delete_array = [...itemList];
    // splicing new array
    post_delete_array.splice(delete_index, 1);
    // setting new array to state array
    setItemList(post_delete_array);

    // resetting complete_array on deletion
    let new_completeArray = [...completeArray];
    console.log(new_completeArray);
    if (new_completeArray.includes(strike_through_delete)) {
      let complete_delete_index = new_completeArray.indexOf(
        strike_through_delete
      );
      new_completeArray.splice(complete_delete_index, 1);
      setCompleteArray(new_completeArray);
    }
  };

  //handles mass deletion button on nav component
  const handleMassDelete = (e) => {
    // preventing page reload
    e.preventDefault();
    // resets itemList array to empty
    setItemList([]);
    setCompleteArray([]);
    document.getElementById("input").value = "";
    console.log("Mass Deletion Accomplished");
  };

  const handleComplete = (element_ID) => {
    // checks to see if this has been clicked before
    if (!completeArray.includes(element_ID)) {
      setCompleteArray(completeArray.concat(element_ID));
    }
  };

  return (
    //   Start react fragment
    <>
      <Nav handleMassDelete={handleMassDelete} />
      <Item_List handleChange={handleChange} handleSubmit={handleSubmit} />
      <ul>
        {itemList.map((current_array_entry, index) => (
          <ToDoItem
            current_array_entry={current_array_entry}
            index={index}
            key={index}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
      <Footer handleMassDelete={handleMassDelete} />
    </>
    //   End react fragment
  );
};

export default Main;
