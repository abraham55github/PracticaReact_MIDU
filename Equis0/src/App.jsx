import { useState } from "react";


const Turnos = {
  X: 'x',
  O: 'o'
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

const WINER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(Turnos.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
  }

  const resetGames = () => {
    setBoard(Array(9).fill(null))
    setTurno(Turnos.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posicion
    // si ya tiene algo
    if (board[index] || winner) return
    const newBoard = [...board]
    // actualizar el tablero
    newBoard[index] = turno
    setBoard(newBoard)
    //cambiar el turno
    const nuevoTurno = turno === Turnos.X ? Turnos.O : Turnos.X;
    setTurno(nuevoTurno)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner)
    }else if (setBoard(newBoard)) {
      setWinner(false)
    }
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
      <footer>
        <button onClick={resetGames}>Reiniciar juego</button>
      </footer>

      <section className="turn">
        <Square isSelected={turno === Turnos.X}>{Turnos.X}</Square>
        <Square isSelected={turno === Turnos.O}>{Turnos.O}</Square>
      </section>


      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false ? 'Empate' : 'Gano: '
                }
              </h2>
              <header className="win">
                {winner && <Square>{winner}</Square>}

              </header>


              <footer>
                <button onClick={resetGames}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}
