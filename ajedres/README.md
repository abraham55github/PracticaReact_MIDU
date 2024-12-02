# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Para añadir la funcionalidad de turno, selección de pieza y cálculo de movimientos válidos, podemos modificar el código de la siguiente manera:

Gestionar el turno: Necesitamos una variable de estado para almacenar el turno actual y alternarlo entre jugadores (blanco y negro).
Seleccionar una ficha: Al hacer clic en una casilla que contiene una pieza, debemos poder seleccionar esa pieza y destacarla.
Movimientos válidos: Calcular y mostrar los movimientos posibles para la pieza seleccionada.
Modificaciones
1. Agregar el turno y la selección de pieza:

Usaremos el estado turn para almacenar el jugador actual.
Usaremos el estado selectedPiece para almacenar la pieza seleccionada.
2. Calcular los movimientos válidos:

A cada tipo de pieza (torre, caballo, alfil, reina, rey, peón), deberíamos definir sus movimientos. Puedes empezar con movimientos básicos para cada tipo de pieza y luego ampliarlos según sea necesario.
Modificaciones de código
Modificar App.js
import { useState } from "react";
import { setupInitialBoard } from "./logic/board";
import { Square } from "./components/Square";
import Pieces from "./components/Pieces";

export default function App() {
  const [board, setBoard] = useState(() => setupInitialBoard());
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [turn, setTurn] = useState("white");  // Blanco empieza
  const [validMoves, setValidMoves] = useState([]);

  // Función para alternar el turno
  const nextTurn = () => {
    setTurn((prevTurn) => (prevTurn === "white" ? "black" : "white"));
  };

  // Función para seleccionar una pieza
  const handleSquareClick = (rowIndex, colIndex) => {
    const piece = board[rowIndex][colIndex];

    if (piece) {
      // Si se hace clic en una pieza, debe ser del turno actual
      if (piece.color === turn) {
        setSelectedPiece({ rowIndex, colIndex, piece });
        // Aquí calculamos los movimientos válidos para la pieza seleccionada
        setValidMoves(getValidMoves(piece, rowIndex, colIndex, board));
      } else {
        alert("Es tu turno!");
      }
    } else {
      // Si el clic es en una casilla vacía, y hay una pieza seleccionada, movemos la pieza
      if (selectedPiece) {
        const { rowIndex: selectedRow, colIndex: selectedCol, piece: selectedPiece } = selectedPiece;
        if (validMoves.some(move => move.row === rowIndex && move.col === colIndex)) {
          const newBoard = [...board];
          newBoard[rowIndex][colIndex] = selectedPiece;
          newBoard[selectedRow][selectedCol] = null;
          setBoard(newBoard);
          nextTurn();  // Cambiar el turno
          setSelectedPiece(null);  // Deseleccionar la pieza
          setValidMoves([]);  // Limpiar los movimientos válidos
        }
      }
    }
  };

  // Función para calcular los movimientos válidos de una pieza
  const getValidMoves = (piece, rowIndex, colIndex, board) => {
    // Lógica para los movimientos válidos según el tipo de pieza
    let moves = [];
    switch (piece.type) {
      case "♟": // Peón
        moves = getPawnMoves(piece, rowIndex, colIndex, board);
        break;
      case "♞": // Caballo
        moves = getKnightMoves(rowIndex, colIndex, board);
        break;
      case "♝": // Alfil
        moves = getBishopMoves(rowIndex, colIndex, board);
        break;
      case "♜": // Torre
        moves = getRookMoves(rowIndex, colIndex, board);
        break;
      case "♛": // Reina
        moves = getQueenMoves(rowIndex, colIndex, board);
        break;
      case "♚": // Rey
        moves = getKingMoves(rowIndex, colIndex, board);
        break;
      default:
        break;
    }
    return moves;
  };

  // Ejemplo de cómo podrías implementar los movimientos de las piezas:
  const getPawnMoves = (piece, rowIndex, colIndex, board) => {
    const direction = piece.color === "white" ? -1 : 1;
    const moves = [];
    // Movimiento hacia adelante
    if (board[rowIndex + direction] && !board[rowIndex + direction][colIndex]) {
      moves.push({ row: rowIndex + direction, col: colIndex });
    }
    return moves;
  };

  const getKnightMoves = (rowIndex, colIndex, board) => {
    // El caballo tiene un movimiento en forma de "L"
    const moves = [];
    const directions = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    directions.forEach(([dx, dy]) => {
      const newRow = rowIndex + dx;
      const newCol = colIndex + dy;
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        moves.push({ row: newRow, col: newCol });
      }
    });
    return moves;
  };

  // Funciones para obtener los movimientos de las demás piezas...

  return (
    <main className="board">
      <h1>Ajedrez</h1>
      <section className="game">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isBlack = (rowIndex + colIndex) % 2 !== 0;
            const isSelected = selectedPiece && selectedPiece.rowIndex === rowIndex && selectedPiece.colIndex === colIndex;
            const isValidMove = validMoves.some(move => move.row === rowIndex && move.col === colIndex);

            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                color={isBlack ? "black" : "white"}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
                isHighlighted={isSelected || isValidMove}
              >
                {cell && <Pieces type={cell.type} color={cell.color} />}
              </Square>
            );
          })
        )}
      </section>
    </main>
  );
}
Explicación de cambios:
Turno: Se añade el estado turn para controlar de qué color es el turno actual. Cuando el turno cambia, el estado alterna entre "white" y "black".
Selección de pieza: Al hacer clic en una casilla con una pieza, verificamos si es el turno del jugador actual. Si lo es, seleccionamos la pieza y calculamos sus movimientos válidos.
Movimientos válidos: Añadimos una función getValidMoves que calcula los movimientos válidos para la pieza seleccionada según su tipo (peón, caballo, alfil, etc.).
Interacción con el tablero: Cuando se hace clic en una casilla vacía y hay una pieza seleccionada, comprobamos si el movimiento es válido y, si es así, movemos la pieza y alternamos el turno.
Estilo CSS (destacar la pieza seleccionada y los movimientos válidos):
Puedes modificar el estilo de los cuadrados para resaltar los movimientos válidos o la pieza seleccionada. Por ejemplo:

.square.selected {
  border: 2px solid blue;
}

.square.valid-move {
  background-color: rgba(0, 255, 0, 0.3);
}
Y, en el componente Square, se pueden añadir clases condicionales para aplicar estos estilos:

const className = `square ${color} ${isHighlighted ? 'selected' : ''} ${isValidMove ? 'valid-move' : ''}`;
Con estos cambios, ahora deberías tener un tablero interactivo con turnos, selección de piezas y cálculos de movimientos válidos. Puedes seguir expandiendo los cálculos de los movimientos de cada pieza, especialmente las más complejas como la reina y el rey.


Ayudita de CHATGPT que quiero probar
