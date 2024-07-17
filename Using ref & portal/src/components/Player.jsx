import { useState } from "react";

export default function Player() {

  const [User , setUser] = useState("unknown")

const handleValue = (e)=>{

  setUser(e.target.value)
}

console.log(`executed`);
  return (
    <section id="player">
      <h2>Welcome {User} entity</h2>
      <p>

        <input type="text" value={User} onChange={handleValue}/>
        <button>Set Name</button>
      </p>
    </section>
  );
}
