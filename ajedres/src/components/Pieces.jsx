

export default function Pieces({type, color}) {
  const className = `chess-piece ${color}`
  return (
  <span className={className}>{type}</span>
  )
}
