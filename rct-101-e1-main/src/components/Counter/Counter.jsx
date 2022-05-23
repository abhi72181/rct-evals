import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  const [counter,setCounter]=useState(count)
  // NOTE: do not delete `data-cy` key value pair
  // console.log(counter,"checkingCounter")
  const addCount=()=>{
    setCounter(counter + 1)
  }

  const subCount=()=>{
    if(counter<2){
      return
    }
    setCounter(counter - 1)
  }
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={addCount}>+</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={subCount}>-</button>
    </div>
  );
};

export default Counter;
