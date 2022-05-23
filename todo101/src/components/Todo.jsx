import React, { useState } from "react";
import Todolist from "./Todolist";
import uuid from "react-uuid";
import Todoitem from "./Todoitem";
import "./Todo.css"
const Todo = () => {
  const [todos, setTodos] = useState("");
  const [todosData, setTodosData] = useState([]);
  const handleChange = (e) => {
    setTodos(e.target.value);
  };

  const handleClick = () => {
    // console.log(todosData)
    // setTodos([...todos,todosData.data])
    // setTodosData("")
    if (!todos) {
      alert("please write something");
    } else {
      setTodosData([...todosData, {id:uuid(), data:todos}]);
      setTodos("");
    }
  };
  // console.log(todosData)
  const deleteTodo=(value)=>{
     setTodosData(todosData.filter((e)=>e.id !== value))
  }
  return (
    <div className="main-container">
      <Todolist>
        {todosData.map((e)=>(
          <Todoitem key={e.id} mykey={e.id} data={e.data}  deleteTodo={deleteTodo} />
        ))}
      </Todolist>
      <br />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Write Something ..."
        name="data"
        value={todos}
        className="input"
      />
      <button className="plus-btn" onClick={handleClick}>+</button>
    </div>
  );
};

export default Todo;
