import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
function App() {
  return (
    <main x>
      <div id="game-container">
        <ol id="players">
         <Player player="player 1" symbol="X"/>
         <Player player="player 2" symbol="0"/>
         
         </ol>
        <GameBoard />
      </div>
      logs
    </main>
  );
}

export default App;
