import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(15);
  // let counter = 15;

  const addvalue = () => {
    setCount(counter + 1);
  };
  
  const removevalue = () => {
    if(counter !== 0){
    setCount(counter -1)}
    else{console.log("value is zero");}
  };
  
  return (
    <>
      <h1 color="black">chai or react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br></br>
      <button onClick={removevalue}>remove value </button>
    </>
  );
}

export default App;
