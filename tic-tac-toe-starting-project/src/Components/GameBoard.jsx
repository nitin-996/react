const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
    {initialBoard.map((row, rowindex) => (
      <li key={rowindex}>
        <ol>
          {row.map((playerSymbol, colindex) => (
            <li key={colindex}>
                <button>{playerSymbol}</button></li>
          ))}
        </ol>
      </li>
    ))}
  </ol>)
}
