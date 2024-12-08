import { useState } from "react"
import { setupInitialBoard } from "./logic/board"
import { Square } from "./components/Square"
import Pieces from "./components/Pieces"

export default function App() {

  const [board, setBoard] = useState(() => setupInitialBoard())
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [validMoves, setValidMoves] = useState([])
  const [turn, setTurn] = useState("white"); 
  
  const nextTurn = () => {
    setTurn((prevTurn)=> (prevTurn === "white" ? "black" : "white"));
  }

  const handleSquareClick = (rowIndex, colIndex) => {
    const piece = board[rowIndex][colIndex];

  };

  // Función para calcular los movimientos válidos de una pieza
  const getValidMoves = (piece, rowIndex, colIndex, board) => {
    // Lógica para los movimientos válidos según el tipo de pieza
    let moves = [];
    switch (piece.type) {
      case "♟": // Peón
        moves = getPawnMoves(piece, rowIndex, colIndex, board);
        break;
      case "♞": // Caballo
        moves = getKnightMoves(rowIndex, colIndex, board);
        break;
      case "♝": // Alfil
      
        break;
      case "♜": // Torre
      
        break;
      case "♛": // Reina
 
        break;
      case "♚": // Rey
 
        break;
      default:
        break;
    }
    return moves;
  };


  return (
<main className="board">
      <h1>Ajedrez</h1>
      <section className="game">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 !== 0;

            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                color={isBlack ? "black" : "white"}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
              >
                {cell && <Pieces type={cell.type} color={cell.color} />}
              </Square>
            );
          })
        )}
      </section>
    </main>
  )
}


