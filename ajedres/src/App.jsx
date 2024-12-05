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

    if (piece) {
      // Si se hace clic en una pieza, debe ser del turno actual
      if (piece.color === turn) {
        setSelectedPiece({ rowIndex, colIndex, piece });
        // Aquí calculamos los movimientos válidos para la pieza seleccionada
        setValidMoves(getValidMoves(piece, rowIndex, colIndex, board));
      } else {
        alert("Es tu turno!");
      }
    } else {
      // Si el clic es en una casilla vacía, y hay una pieza seleccionada, movemos la pieza
      if (selectedPiece) {
        const { rowIndex: selectedRow, colIndex: selectedCol, piece: selectedPiece } = selectedPiece;
        if (validMoves.some(move => move.row === rowIndex && move.col === colIndex)) {
          const newBoard = [...board];
          newBoard[rowIndex][colIndex] = selectedPiece;
          newBoard[selectedRow][selectedCol] = null;
          setBoard(newBoard);
          nextTurn();  // Cambiar el turno
          setSelectedPiece(null);  // Deseleccionar la pieza
          setValidMoves([]);  // Limpiar los movimientos válidos
        }
      }
    }
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

  // Ejemplo de cómo podrías implementar los movimientos de las piezas:
  const getPawnMoves = (piece, rowIndex, colIndex, board) => {
    const direction = piece.color === "white" ? -1 : 1;
    const moves = [];
    // Movimiento hacia adelante
    if (board[rowIndex + direction] && !board[rowIndex + direction][colIndex]) {
      moves.push({ row: rowIndex + direction, col: colIndex });
    }
    return moves;
  };

  const getKnightMoves = (rowIndex, colIndex, board) => {
    // El caballo tiene un movimiento en forma de "L"
    const moves = [];
    const directions = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    directions.forEach(([dx, dy]) => {
      const newRow = rowIndex + dx;
      const newCol = colIndex + dy;
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        moves.push({ row: newRow, col: newCol });
      }
    });
    return moves;
  };


  return (
<main className="board">
      <h1>Ajedrez</h1>
      <section className="game">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 !== 0;
            const isSelected = selectedPiece && selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex;
            const isValidMove = validMoves.some(move => move.row === rowIndex && move.col === colIndex);

            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                color={isBlack ? "black" : "white"}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
                isHighlighted={isSelected || isValidMove}
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


