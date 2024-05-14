import React, { useState } from "react";

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function Gameboard({onSelectExecute , activeSymbolOnBoard}) {
  const [gameboard, setGameboard] = useState(board); // Initialize with the board array

  const handleEvent = (rowIndex, colIndex) => {
    setGameboard((prevValue) => {
      const updatedBoard = [...prevValue.map((innerValue) => [...innerValue])];
      console.log(gameboard);
      updatedBoard[rowIndex][colIndex] = activeSymbolOnBoard;
      return updatedBoard;
    });

    onSelectExecute();
  };

  return (
    <ol id="game-board">
      {gameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    handleEvent(rowIndex, colIndex);
                  }}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default Gameboard;
