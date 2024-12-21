import { useState } from "react"
import { Square } from "./components/Square"
import Pieces from "./components/Pieces"
import { useGame } from "./context/GameContext"

export default function App() {

  const { board, handleSquareClick, turn, nextTurn, selectedPiece} = useGame();

  const isBlack = (row, col) => {
    return (row + col) % 2 === 0;
  } 

  const isSelected = (row, col) => {
    return selectedPiece && selectedPiece.row === row && selectedPiece.col === col;
  }

  return (
    <main className="board">
      <h1>Ajedrez</h1>
      <section className="game">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                color={isBlack(rowIndex, colIndex) ? "black" : "white"}
              >
                {cell && (
                  <Pieces
                    type={cell.type}
                    color={cell.color}
                    isSelected={
                      isSelected(rowIndex, colIndex)
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
        <h2>Turno: {turn === "white" ? "Blancas" : "Negras"} </h2>
        <button onClick={nextTurn}>Pasar Turno</button>
      </section>
    </main>
  )
}


