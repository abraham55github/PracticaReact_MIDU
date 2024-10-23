import { useState } from "react";


const Turnos = {
  X : 'x', 
  O : 'o'
}



const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : null}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(Turnos.X)


  return (
    <main className="board">
      <h1>Juego</h1>
      <section className="game">
        {
        board.map((cell, index) => {
          return (
            <Square 
              key={index} 
              index={index}
              
            >
              {board[index]}
            </Square>
          )
        })
        }
      </section>

      <section className="turn">
        <Square isSelected={turno === Turnos.X}>{Turnos.X}</Square>
        <Square isSelected={turno === Turnos.O}>{Turnos.O}</Square>
      </section>
    </main>
  )
}
