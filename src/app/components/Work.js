import React from 'react'
import { useState } from 'react'

export default function Work() {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [dis, setDis] = useState(false)
  
    const handleClick = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        return;
      }
  
      const newIntervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    };
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setDis(!dis)}>Disable Counter Button</button>
        <button disabled ={dis} onClick={handleClick}>
          {intervalId ? "Stop counting" : "Start counting"}
        </button>
      </div>
    );
}
