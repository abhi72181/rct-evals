import React from 'react'
import "./Todoitem.css"
const Todoitem = ({mykey, data ,  deleteTodo}) => {

//  console.log(keys)
  return (
    <div className='itemFlex'>
    <div className='item-data'>{data}</div>
    <button className='item-btn' onClick={()=>deleteTodo(mykey)}>-</button>
    </div>
  )
}

export default Todoitem