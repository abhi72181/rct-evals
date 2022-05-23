import React, { useState } from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import TaskList from "../data/tasks.json";


 


// const [TaskList,setTaskList]=useState("")
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [addTaskList,setAddTaskList]=useState()
  const addsTodo=(TaskList)=>{
    setAddTaskList(TaskList)
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader TaskList={TaskList}/>
      {/* Add Task */}
      <AddTask TaskList={TaskList} addsTodo={addsTodo}/>
      {/* Tasks */}
      <Tasks TaskList={TaskList}/>

     
    </div>
  );
};

export default TaskApp;
