

export default function Pieces({ type, color, isSelected }) {
  const className = `chess-piece ${color} ${isSelected ? "selected" : ""}`;
  return <span className={className}>{type}</span>;
}