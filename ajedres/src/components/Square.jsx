


export const Square = ({children, color, isSelected}) => {

  const className = `square ${color} ${isSelected ? 'is-selected' : '' }`

  return (
    <>
      <div className={className}>
        {children}
      </div>
    </>
  )
}