import React, { useEffect, useState } from 'react'

function UseEffectHook() {
const [num , setnum] = useState(0)

const title = document.querySelector("title")
useEffect(()=>{title.innerHTML= `click me ${num}`}
,[num])

  return (
<>
    <button onClick={()=>{setnum(num +1)}} >click me {num}</button>
    
  </>)
}

export default UseEffectHook