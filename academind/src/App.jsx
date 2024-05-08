import { useState ,useEffect } from 'react'



function CoreConcept({Title , description}){
  return (
    <li>
      <img src='..' alt='..'/>
      <h3>{Title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {

  return(
  <>
<section className="p-8 rounded-md bg-black shadow text-white">
      <h2>Core Concept</h2>
    <ul>
<CoreConcept Title="component" description="this is passing prop"/>

    </ul>
  </section>
  </>
  )
}

export default App
