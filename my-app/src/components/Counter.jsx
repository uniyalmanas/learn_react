import React, { useState } from 'react'// hook - external functionalities ko access karne k lie hooks use karte hai 

const Counter = () => {
  let [number,setNumber] = useState(0);
 function handleclick(e)
 {
  e.stopPropagation();
  console.log('clicked ADD');
  setNumber(number=>number+1);
  console.log(number);
 }
 return (
<>
<h1 style={{color:'white'}}>{number}</h1>
<button onClick={handleclick}>Add </button>

</>
  )
}

export default Counter 