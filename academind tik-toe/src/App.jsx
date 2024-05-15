import { useState } from "react";
import Gameboard from "./Components/Gameboard";
import Players from "./Components/Players";
import Log from "./Components/Log";

function App() {
  const [gamerTurn, setGameturn] = useState([]);
  const [activeplayer, setactiveplayer] = useState("X");

  const handleSelectsquare = () => {
    setactiveplayer((prevalue) => (prevalue === "X" ? "O" : "X"));
    setGameturn((prevalue) => {
      let currentPlayer = "x";

      if (prevalue.length > 0 && prevalue[0].player === "X") {
        currentPlayer = "O";
      }
      const updateTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevalue,
      ];

      return updateTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Player 1" symbol="X" isActive={activeplayer === "X"} />
          <Players name="Player 2" symbol="O" isActive={activeplayer === "O"} />
        </ol>
        {/* GameBoard old attribute = activeSymbolOnBoard={activeplayer} */}
        <Gameboard onSelectExecute={handleSelectsquare} turns={gamerTurn} />
      </div>
      <Log turns={gamerTurn} />
    </main>
  );
}

export default App;
