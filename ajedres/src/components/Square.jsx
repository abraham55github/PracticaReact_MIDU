import Pieces from "./Pieces"

export const Square = ({ square, color, IsSelected }) => {

  const squareColor = square.color || (square.index % 2 === 0 ? 'light' : 'dark')


  return (
    <>
      <div
        className={`square ${squareColor} ${IsSelected ? 'highlight' : ''}`}
      >
        {square.piece && <Pieces type={square.piece.type} color={square.piece.color} />}
      </div>

    </>
  )
}