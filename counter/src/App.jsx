import Counter from './components/Counter'
import './App.css'
import { useState } from 'react'

function App() {
  const [initcounter,setInitcounter]=useState(0)
  const [counter,setCounter]=useState({
    initi:""
  })
  const handleChange=(e)=>{
    console.log(e.target.value)
    setCounter({...counter,[e.target.name]:e.target.value})
   
  }
   
 const handleClick=()=>{
  setInitcounter(+(counter.initi))
 }
  
  return (
    <div className="App">
      <input type="text" placeholder='enter initial value' onChange={handleChange} value={counter.initi}  name="initi"/>
      <button onClick={handleClick}>Submit</button>
      {/* <div>{typeof(initcounter)}</div> */}
     <Counter num={initcounter} />
    </div>
  )
}

export default App
