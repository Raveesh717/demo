import React, {useState} from 'react';

import './App.css';


function App() {

const [counter, setCounter] = useState(0)

  const incrementer = () => {
    setCounter((prev) => prev + 1)
    console.log(counter);
  }
  
  return (
  
  <div className = "App"> 
  <h1>Hello</h1>
  <div className='home'>
    <h1>Counter {counter}</h1>
    <button onClick={incrementer}>Click</button>
  
   </div>
  </div>
   
   )
}

export default App;
