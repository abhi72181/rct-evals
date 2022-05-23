import React, { useState } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from 'uuid';
const AddTask = ({TaskList,addsTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [addTodo,setAddtodo]=useState("")
  const [addTaskList,setAddTaskList]=useState([])
  const handleChange=(e)=>{
    // console.log(e.target.value,"checking")
     setAddtodo(e.target.value)
  }
  const handleClick=()=>{
    setAddTaskList([...addTaskList,{
      id: uuidv4(),
      text: addTodo,
      done:"false",
      count: 1
    }])

    addsTodo(addTaskList)
  }
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={handleChange}/>
      <button data-cy="add-task-button" onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;
