import { WINER_COMBOS } from "../constants";

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
}