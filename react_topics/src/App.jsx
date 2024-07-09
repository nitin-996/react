import image from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS ,EXAMPLES } from "./Data";
// we have added image this way bcz in build process it will include the image.

import  Dynamic  from "./Components/Dynamic"
import  Concepts  from "./Components/Concepts"


function App() {

  const change = ["fundamentel", "crucial","CORE"]
  function randomchange(max){
  
    return Math.floor(Math.random() * (max + 1))
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
        
<Concepts/>
<Dynamic/>
      


      </main>
      </>
  );
}

export default App;
