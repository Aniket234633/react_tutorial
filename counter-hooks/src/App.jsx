import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  // let counter = 15;
  const addvalue = () =>{
    console.log("value added", counter);
    // ounter = counter + 1;
    
    if (counter < 50){
      setcounter(counter + 1);
    }
  }
  const removevalue = () =>{
    console.log("value removed", counter);
    // ounter = counter + 1;
    if (counter > 0){
      setcounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>increase Value</button><br/>
      <button onClick={removevalue}>Decrease Value</button>
    </>
  )
}

export default App
