import { useState } from "react";


const Turnos = {
  X : 'x', 
  O : 'o'
}



const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

export default function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(Turnos.X)

  const updateBoard = (index) => {
    const newBoard = [... board]
    newBoard[index] = turno
    setBoard(newBoard)
    const nuevoTurno = turno === Turnos.X ? Turnos.O : Turnos.X;
    setTurno(nuevoTurno)
  }

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
              updateBoard={updateBoard}
              
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
