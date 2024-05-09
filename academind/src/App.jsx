import { useState, useEffect } from "react";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./Component/CoreComponent";
import ButtonComp from "./Component/ButtonComp";

function App() {
const [select , setSelect] = useState()

const handlefun = (child)=>{
setSelect(child)  
}

  return (
    <>
      <section className="p-8 rounded-md bg-fuchsia-700 shadow text-white" >
        <h2>Core Concept</h2>
        <ul>
          {/* here we use spread operator and it bring all the property from data.js file and we have passed it as props in component. 
       but keep in mind that you component prop key value should be same as data file object key. */}
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept
            Title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
          />
        </ul>
      </section>
<menu>
        <ButtonComp isSelect={select === "component" }
        onSelect={()=>{handlefun("component")}}
        >component</ButtonComp>
        <br></br>
        <ButtonComp isSelect={select === "demo"} 
        onSelect={()=>{handlefun("demo")}}
        label= "demo"></ButtonComp>
        </menu>  
     
    </>
  );
}

export default App;
