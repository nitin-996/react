import { useState ,useEffect } from 'react'
import { CORE_CONCEPTS } from './data'
import CoreConcept from './Component/CoreComponent'



function App() {

  return(
  <>
<section className="p-8 rounded-md bg-black shadow text-white">
      <h2>Core Concept</h2>
    <ul>

       {/* here we use spread operator and it bring all the property from data.js file and we have passed it as props in component. 
       but keep in mind that you component prop key value should be same as data file object key. */}
<CoreConcept {...CORE_CONCEPTS[1] }/>
<CoreConcept 
Title={CORE_CONCEPTS[2].title}
description={CORE_CONCEPTS[2].description}
image={CORE_CONCEPTS[2].image}
/>

    </ul>
  </section>
  </>
  )
}

export default App
