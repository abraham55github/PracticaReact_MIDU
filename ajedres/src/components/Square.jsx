

export const Square = ({ children, color, isValidMove }) => {
  const className = `square ${isValidMove ?"valid-move" : color }`;
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};