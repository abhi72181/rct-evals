import React, { useState } from "react";
import styles from "./tasks.module.css";

import Task from "../Task/Task";
const Tasks = ({TaskList}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isPresent,setIsPresent]=useState(true)

  if(TaskList.length==0){
    setIsPresent(false)
  }
  
  return (
    <>
    {isPresent?  <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
       
       {TaskList.map((e)=>(
         <Task e={e}/>
       ))}
      
      </ul>: <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <h1>Empty List</h1>
      </div>}
     
     
    </>
  );
};

export default Tasks;
