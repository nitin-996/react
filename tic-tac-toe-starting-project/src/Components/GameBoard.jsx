
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare , turns } ) {

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

const gameboard = initialBoard;

for (const turn of turns){ 
  const {square , player} = turn;
  const {row,col} = square;

  gameboard[row][col] = player
}

  return (
    <ol id="game-board">
      {gameboard.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((playerSymbol, colindex) => (
              <li key={colindex}>
                <button onClick={()=>onSelectSquare(rowindex,colindex)}>
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
