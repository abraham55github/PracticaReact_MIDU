import { useState } from "react"
import { setupInitialBoard } from "./logic/board"
import { Square } from "./components/Square"

export default function App() {

  const [board, setBoard] = useState(() => setupInitialBoard())
  

  return (
    <main className="board">
      <h1>Ajedres</h1>
      <section className="game">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 !== 0; 
            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                color={isBlack ? "black" : "white"} 
              >
                {cell}
              </Square>
            );
          })
        )}
      </section>
    </main>
  )
}


