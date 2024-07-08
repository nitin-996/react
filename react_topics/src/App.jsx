import image from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS ,EXAMPLES } from "./Data";
// we have added image this way bcz in build process it will include the image.

import Coreconcept from "./Components/Coreconcept";
import Button from "./Components/Button";
import { useState } from "react";



const change = ["fundamentel", "crucial","CORE"]
function randomchange(max){

  return Math.floor(Math.random() * (max + 1))
}


function App() {

const [descrip , setdescrip] = useState();

  function handleClick(selected){
    return setdescrip(selected);
  }
  
  return (
   <>
      <header>
        <img src={image} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {change[randomchange(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>

        <section id="core-concepts">
          <ul>
           {CORE_CONCEPTS.map((conceptitem)=>{return  <Coreconcept {...conceptitem}   />})}
          
           
          
</ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <Button isSelected={descrip == "components"} onSelect={()=>{handleClick("components")}}>components</Button>
          <Button isSelected={descrip == "props"} onSelect={()=>{handleClick("props")}}>props</Button>
          <Button isSelected={descrip == "jsx"} onSelect={()=>{handleClick("jsx")}}>jsx</Button>
          <Button isSelected={descrip == "state"} onSelect={()=>{handleClick("state")}}>state</Button>
          </menu>

          <h2>Dynamic change</h2>

          {/* conditional rendenring */}
          {!descrip ? <p>please click on button</p> : null}
          {descrip && <div id="tab-content">

            
<h3>{EXAMPLES[descrip].title}</h3>
<p>{EXAMPLES[descrip].description}</p>
<pre><code>{EXAMPLES[descrip].code}
  </code></pre>
</div> }
        </section>

      </main>
      </>
  );
}

export default App;
