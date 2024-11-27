import { useState } from "react"
import { setupInitialBoard } from "./logic/board"
import { Square } from "./components/Square"

export default function App() {

  const [board, setBoard] = useState(() => setupInitialBoard())

  return (
    <main className="board">
      <h1>Ajedres</h1>
      <section className="game">
        {board.map((row, rowIndex) => (
        
            row.map((cell, colIndex) => (
              <Square key={`${rowIndex}-${colIndex}`}>
                {/* Puedes mostrar datos específicos en la casilla */}
                {cell}
              </Square>
            ))
          
        ))}
      </section>
    </main>
  )
}


