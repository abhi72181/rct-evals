import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({e}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(e.count,"count")
  const [check,setCheck]=useState("false")
  const handleChange=(e)=>{
    // console.log(e.target.value,"checking")
    setCheck(!check)
  }
  
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox"  data-cy="task-checkbox" onChange={handleChange}/>
      <div data-cy="task-text" className={!check?styles.checkbox:""}>{e.text}</div>
      {/* Counter here */}
      <Counter count={e.count}/>
      <button data-cy="task-remove-button" >x</button>
    </li>
  );
};

export default Task;
