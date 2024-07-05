import image from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS } from "./Data";
// we have added image this way bcz in build process it will include the image.

import Coreconcept from "./Components/Coreconcept";

const change = ["fundamentel", "crucial","CORE"]
function randomchange(max){

  return Math.floor(Math.random() * (max + 1))
}

function App() {
  return (
    <div>
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
           <Coreconcept 
           {...CORE_CONCEPTS[0]}/>
           
           <Coreconcept 
           {...CORE_CONCEPTS[2]}/>
                <Coreconcept 
           {...CORE_CONCEPTS[3]}/>
           <Coreconcept 
           title={CORE_CONCEPTS[1].title}
           image={CORE_CONCEPTS[1].image}
           description={CORE_CONCEPTS[1].description}/>
</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
