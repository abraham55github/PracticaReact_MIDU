import Square from './Square';

export default function Board({ board, onSquareClick, highlightedSquares }) {
  return (
    <div className="board">
      {board.map((square, index) => (
        <Square
          key={index}
          square={square}
          onClick={() => onSquareClick(index)}
          isHighlighted={highlightedSquares.includes(index)}
        />
      ))}
    </div>
  )
}
