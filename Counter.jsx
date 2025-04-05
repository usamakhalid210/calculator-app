import { React } from 'react'
import { useState } from 'react'


function Counter() {
  const [num, setNum] = useState(0)
  const pre = 0;
 function inc (){
  setNum(num +2)
 }
 function dec (){
   if (num > 0)
     setNum(num  -3);
     else (num = 0);
   }
   return (
    <>
    

    <button onClick={dec}>-</button>  {num} <button onClick={inc}>+</button>
    </>
  )
}

export default Counter
