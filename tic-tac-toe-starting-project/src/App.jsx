import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winningCombination";
import GameOver from "./Components/GameOver";


const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedTurns(gameturns){
  let currentplayer = "X"

  if (gameturns.length > 0 && gameturns[0].player === "X"){
    currentplayer = "O"
  }

  return currentplayer
}

function App() {

  // const [activeplayer , SetActivePlayer] = useState('X')
  const [gameturns, SetGameTurns] = useState([])
const activeplayer = derivedTurns(gameturns)
const [player , Setplayer]= useState({
  X : 'Player1',
  O : 'player2'
})

function handleRestartGame(){
  SetGameTurns([])
}

const gameboard = [...initialBoard.map((inner)=> [...inner])];

for (const turn of gameturns){ 
  const {square , player} = turn;
  const {row,col} = square;

  gameboard[row][col] = player
}

let winner;

for (const combination of WINNING_COMBINATIONS){
  const firstsquare =gameboard[combination[0].row][combination[0].column]
  const secondSquare = gameboard[combination[1].row][combination[1].column]
  const thirdSquare = gameboard[combination[2].row][combination[2].column]

  if(firstsquare && firstsquare === secondSquare && firstsquare === thirdSquare){
    winner= player[firstsquare];
  }
}

const hasDraw =  gameturns.length === 9 && !winner

function handlerSelectSquare(rowindex,colindex){

//  SetActivePlayer((prev)=> (prev === "X" ? "O" : "X"))

 SetGameTurns(prev=>{
  
  const currentplayer = derivedTurns(prev)

  const updateTurns = [{ square : {row: rowindex , col : colindex} , player : currentplayer} , ...prev]
 console.log(updateTurns);
  return updateTurns
 })
}

function handlePlayerNameChange(symbol , newName){

  Setplayer((prev)=>{
    return {
    ...prev,
    // dynamically setting key of object.
    [symbol] : newName }
  })

}

  return (
    <main x>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player player={player.X} symbol="X" isActive={activeplayer === "X"} onChangeName={handlePlayerNameChange}/>
         <Player player={player.O} symbol="0" isActive={activeplayer === "O"} onChangeName={handlePlayerNameChange}/>
         
         </ol>
         {(winner || hasDraw )&& <GameOver winner={winner} onReset={handleRestartGame}/>}
         {/* activePlayerSymbol={activeplayer} */}
        <GameBoard onSelectSquare={handlerSelectSquare}  board={gameboard}/>
      </div>
       <Log turns={gameturns}/>
    </main>
  );
}

export default App;
