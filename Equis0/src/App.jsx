import { useState } from "react";
import { Square } from "./components/Square";
import { Turnos } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameStorage, resetGameStorage } from "./storage";

export default function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(64).fill(null) 
  })


  const [turno, setTurno] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turno')
    return turnFromStorage? turnFromStorage : Turnos.X})
  const [winner, setWinner] = useState(null)


  const resetGames = () => {
    setBoard(Array(64).fill(null))
    setTurno(Turnos.X)
    setWinner(null)

    // eliminando los datos en localStorage
    resetGameStorage()

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

    // guardando los cambios en localStorage
    saveGameStorage({
      board: newBoard,
      turno: nuevoTurno
    })

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

      <WinnerModal winner={winner} resetGames={resetGames}/>

    </main>
  )
}
