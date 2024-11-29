/* import { WINER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square !== null)
} */

export const setupInitialBoard = () => {
  const board = Array(8).fill(null).map(() => Array(8).fill(null))
  board[0] = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
  board[1] = Array(8).fill("♟");

  board[6] = Array(8).fill("♙");
  board[7] = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"];

  return board;
};
