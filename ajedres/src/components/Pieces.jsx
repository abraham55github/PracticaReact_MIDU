

export default function Pieces({type, color}) {

    const pieceIcons = {
        pawn: '♙',
        rook: '♖',
        knight: '♘',
        bishop: '♗',
        queen: '♕',
        king: '♔',
    };

    const icons = pieceIcons[type];

  return (
    <div className={`piece ${color}`}>
      {color === 'black' ? icons[type].TolowerCase() : icons[type]}
    </div>
  )
}
