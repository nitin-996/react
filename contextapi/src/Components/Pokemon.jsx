import React, { useEffect, useState } from 'react'
import axios from "axios";
const Pokemon = () => {

    const [num,setnum] = useState(1)



    useEffect(()=>{
        async function getdata(){
            const res = await axios.get(`https://pokepai.co/api/v2/pokemon/${num}`)
            console.log(res);
        }

        getdata()
    }
    
)


  return (
    <>

    <h1>you choose {num} value</h1>
    <select value={num} onChange={(event)=>{
        setnum(event.target.value)

    }}>
<option value="1"></option>
<option value="25"></option>
<option value="3"></option>
<option value="4"></option>
<option value="5"></option>
    </select>
    </>
  )
}

export default Pokemon