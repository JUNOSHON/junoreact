import React from 'react';
import {useState} from 'react';

export default function Counter() {
  
  const [number,setNumber] = useState(0);
  
  const plus = (element) => {
    
    setNumber(element => element + 1)
  }
  const minus = (element) => {
    
    setNumber(element => element - 1);
  }
    return(
        <>
          <button onClick={plus}>+</button>
          <span>{number}</span>
          <button onClick={minus}>-</button>
        </>
    )
}
