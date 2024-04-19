import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokemon = ()=> {

  const [num,setnum] = useState(1)
  const [name,setname] = useState()

  useEffect(()=>{
    async function pokeapi(){

       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
       setname(res.data.name)
    }
    pokeapi()
  },[num])


  return (
<>
<div>Pokemon {num} value {name}</div>

<select value={num} onChange={(event)=>{ setnum(event.target.value)}}>
<option value={"1"}> 1</option>
  <option value={"17"}> 17</option>
  <option value={"3"}> 3</option>
  <option value={"4"}> 4</option>
  <option value={"5"}> 5</option>

</select>

   
    </>
  )
}

export default Pokemon