export const getLegalKnightMoves = (piece, currentPos, boardState, whiteMove) => {
  console.time("YEET")
  const moves = []
  if (piece.toLowerCase() === piece && whiteMove) return moves
  if (piece.toUpperCase() === piece && !whiteMove) return moves  

  return [{x:0, y:0}]
}