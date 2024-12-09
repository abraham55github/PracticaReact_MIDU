import { useState } from "react"
import { setupInitialBoard } from "./logic/board"
import { Square } from "./components/Square"
import Pieces from "./components/Pieces"
import { Turnos } from "./constants"

export default function App() {

  const [board, setBoard] = useState(() => setupInitialBoard())
  const [selectedPiece, setSelectedPiece] = useState(null)
  const [validMoves, setValidMoves] = useState([])
  const [turn, setTurn] = useState(Turnos.white); 
  
  const nextTurn = () => {
    setTurn((prevTurn)=> (prevTurn === "white" ? "black" : "white"));
  }


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
                {cell && <Pieces type={cell.type} color={cell.color} />}
              </Square>
            );
          })
        )}
      </section>


      <section className="turn">
        <Square isSelected={turn === Turnos.white}>{Turnos.white}</Square>
        <Square isSelected={turn === Turnos.black}>{Turnos.black}</Square>
      </section>
    </main>
  )
}


