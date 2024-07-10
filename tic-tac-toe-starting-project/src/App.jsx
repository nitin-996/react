import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";

function App() {

  const [activeplayer , SetActivePlayer] = useState('X')
  const [gameturns, SetGameTurns] = useState([])


function handlerSelectSquare(rowindex,colindex){

 SetActivePlayer((prev)=> (prev === "X" ? "O" : "X"))
 SetGameTurns(prev=>{
  let currentplayer = "X"

  if (prev.length > 0 && prev[0].player === "X"){
    currentplayer = "O"
  }
  const updateTurns = [{ square : {row: rowindex , col : colindex} , player : currentplayer} , ...prev]
 console.log(updateTurns);
  return updateTurns
 })
}

  return (
    <main x>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player player="player 1" symbol="X" isActive={activeplayer === "X"} />
         <Player player="player 2" symbol="0" isActive={activeplayer === "O"}/>
         
         </ol>
         {/* activePlayerSymbol={activeplayer} */}
        <GameBoard onSelectSquare={handlerSelectSquare}  turns={gameturns}/>
      </div>
       <Log turns={gameturns}/>
    </main>
  );
}

export default App;
