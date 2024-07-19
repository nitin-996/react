import { useRef, useState } from "react";

export default function Player() {

  const [User , setUser] = useState("")
  const addValue = useRef()



function handleClick(){
  setUser(addValue.current.value)
  addValue.current.value = '';
}

console.log(`executed`);
  return (
    <section id="player">
      <h2>Welcome {User ? User : "unknown entity"} </h2>
      <p>

        <input ref={addValue} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
