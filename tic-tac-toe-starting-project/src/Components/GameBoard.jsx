

export default function GameBoard({ onSelectSquare , board } ) {

  // , activePlayerSymbol 
  // this state handled the update of X or O in gameboard
  // const [gameboard, Setgameboard] = useState(initialBoard);

  // function handleSelectBoard(rowindex, colindex) {
    
  //   Setgameboard((previous) => {
  //     // in react don't update the array directly. first made the copy of that array.
  //     // returning new copied array using spread operator
  //     const updateBoard = [...previous.map((innerBoard) => [...innerBoard])];
      
  //     console.log(updateBoard);
  //     updateBoard[rowindex][colindex] = activePlayerSymbol;
  //     return updateBoard;
  //   });

  //   onSelectSquare();
  // }


  return (
    <ol id="game-board">
      {board.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((playerSymbol, colindex) => (
              <li key={colindex}>
                <button onClick={()=>onSelectSquare(rowindex,colindex)} disabled={playerSymbol !== null}>
                  {" "}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
