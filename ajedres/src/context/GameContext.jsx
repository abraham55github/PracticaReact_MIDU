import { createContext, useState, useContext } from 'react';
import { setupInitialBoard } from '../logic/board';

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
    if (!cell || cell.color !== turn) return;

    setSelectedPiece({ row, col });
    console.log(`Selected piece at ${row},${col}`);
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