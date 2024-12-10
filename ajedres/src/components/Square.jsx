


export const Square = ({children, color, isSelected, onClick}) => {

  const className = `square ${color} ${isSelected ? 'is-selected' : '' }`

  return (
    <>
      <div className={className} onClick={onClick} style={{ cursor: children ? "pointer" : "default" }}>
        {children}
      </div>
    </>
  )
}