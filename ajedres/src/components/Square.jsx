export const Square = ({ children, isSelected, updateBoard, index }) => {

    const col = index % 8
    const row = Math.floor(index / 8)
    
    const isWhite = (row % 2 === 0 && col % 2 === 0)  || (row % 2 !== 0 && col % 2 !== 0)

    const className = `square ${isSelected ? 'is-selected' : ''} ${isWhite ? 'white' : 'black'}`
   
    const handleClick = () => {
      updateBoard(index)
    }

    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }