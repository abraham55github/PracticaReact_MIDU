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
    setTurn((prevTurn) => (prevTurn === "white" ? "black" : "white"));
  };

  const handleSquareClick = (row, col) => {
    const cell = board[row][col];
    if (!cell || cell.color !== turn) return; // Solo se seleccionan piezas del turno actual

    setSelectedPiece({ row, col });
    console.log(`Selected piece at ${row},${col}`);
    // Aquí podrías implementar lógica adicional para calcular movimientos válidos
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
              >
                {cell && (
                  <Pieces
                    type={cell.type}
                    color={cell.color}
                    isSelected={
                      selectedPiece &&
                      selectedPiece.row === rowIndex &&
                      selectedPiece.col === colIndex
                    }
                    turn={turn}
                    onClick={() => handleSquareClick(rowIndex, colIndex)}
                  />
                )}
              </Square>
            );
          })
        )}
      </section>
      <section className="turn">
        <h2>Turno: {turn === "white" ? "Blancas" : "Negras"}</h2>
        <button onClick={nextTurn}>Pasar Turno</button>
      </section>
    </main>
  )
}


