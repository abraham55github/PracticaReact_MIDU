import { useState } from "react";


const Turnos = {
  X : 'x', 
  O : 'o'
}



const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

export default function App() {
  const board = Array(9).fill(null);
  const [boardx, setBoardx] = useState()


  return (
    <main className="board">
      <h1> Juego X y 0</h1>
      <section className="game">
        {
        board.map((cell, index) => {
          return (
            <Square 
              key={index} 
              index={index}
              
            >

            </Square>
          )
        })
        }
      </section>
    </main>
  )
}
