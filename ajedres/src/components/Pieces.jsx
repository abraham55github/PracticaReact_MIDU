

export default function Pieces({type, color}) {

    const pieceIcons = {
        pawn: '♙',
        rook: '♖',
        knight: '♘',
        bishop: '♗',
        queen: '♕',
        king: '♔',
    };

    const icon = pieceIcons[type];

  return (
    <div className={`piece ${color}`}>
      {icon}
    </div>
  )
}
