import { useState } from "react";
import { Square } from "./components/Square";
import { WINER_COMBOS, Turnos } from "./constants";


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

  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square !== null)
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
    } else if (checkEndGame(newBoard)) {
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

      <button onClick={resetGames}>Reiniciar juego</button>


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
