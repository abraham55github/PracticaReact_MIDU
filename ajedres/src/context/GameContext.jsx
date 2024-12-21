import { createContext, useState, useContext } from 'react';
import { setupInitialBoard } from '../logic/board';
import { movementRules } from '../logic/Rules';

// 1. Crear el Contexto
const GameContext = createContext();

// 2. Crear el Provider
export function GameProvider({ children }) {
  const [board, setBoard] = useState(() => setupInitialBoard());
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [turn, setTurn] = useState('white');
  const [validMoves, setValidMoves] = useState([]);

  const nextTurn = () => {
    setTurn((prevTurn) => (prevTurn === 'white' ? 'black' : 'white'));
  };

  const handleSquareClick = (row, col) => { 
    const cell = board[row][col];
    if (!cell || cell.color !== turn) {
      setValidMoves([]); // Limpia movimientos si no seleccionas una pieza válida
      return;
    }

    console.log(`Selected piece at ${row},${col}`);

    // Si seleccionamos una pieza válida
    setSelectedPiece({ row, col });

    // Calcula los movimientos válidos para la pieza seleccionada
    const rule = movementRules[cell.type === "♟" ? "pawn" : null]; // Por ahora solo peones
    if (rule) {
      const moves = rule([row, col], board, cell.color);
      setValidMoves(moves);
    } else {
      setValidMoves([]); // Si no hay regla, limpia movimientos
    }
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        selectedPiece,
        setSelectedPiece,
        turn,
        setTurn,
        validMoves,
        setValidMoves,
        nextTurn,
        handleSquareClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// 3. Hook personalizado para consumir el contexto
export const useGame = () => useContext(GameContext);