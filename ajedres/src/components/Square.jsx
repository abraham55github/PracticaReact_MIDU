

export const Square = ({ children, color, isSelected, onClick, turn }) => {
  const isPieceClickable =
    React.isValidElement(children) && children.type === Pieces && children.props.color === turn; // Verifica que sea un componente Pieces y coincida con el turno

  const className = `square ${color} ${isSelected ? "is-selected" : ""}`;

  return (
    <div
      className={className}
      onClick={isPieceClickable ? onClick : undefined}
      style={{ cursor: isPieceClickable ? "pointer" : "default" }}
    >
      {children}
    </div>
  );
};