import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    name: "nitin",
    age: 24
  }


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4">tailwind</h1>
      <Card username="chai aur code" getobj={myobj }/>
      <Card username="props use" getobj={myobj}/>
    </>
  );
}

export default App;
