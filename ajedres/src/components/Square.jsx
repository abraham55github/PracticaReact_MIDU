

export const Square = ({ children, color }) => {
  const className = `square ${color} `;
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};