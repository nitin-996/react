import { useState } from "react";
import React from "react";

function Players({ name, symbol }) {
  const [Edit, setEdit] = useState(false);
  const [value , setValue] = useState(name);

  let changeinput = <span className="player-name">{value}</span>;

const getValue = (e)=>{
    const even = e.target.value;
    setValue(even) 

}


  const Save = () => setEdit((prevalue)=> !prevalue);

  let valueinner = "Edit"
  if (Edit) {
    changeinput = <input className="player-name" type="text" required value={value} onChange={getValue}/>;
valueinner = "save"

  }


  return (
    <li>
      <span className="player">
        {changeinput}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* use either of logic both change button from edit to save */}

      {/* 1st logic */}
      {/* <button onClick={Save}>{Edit ? "save" : "Edit"}</button> */}
      {/* 2nd logic */}
      <button onClick={Save}>{valueinner}</button>
    </li>
  );
}

export default Players;
