export const saveGameStorage = ({board, turno}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turno', turno)
}


export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turno')
}