export const getLegalKnightMoves = (piece, currentPos, boardState, whiteMove) => {
  console.time("YEET")
  const moves = []
  if (piece.toLowerCase() === piece && whiteMove) return moves
  if (piece.toUpperCase() === piece && !whiteMove) return moves  

  let possibleMoves = [
    {x: currentPos.x - 1, y: currentPos.y - 2},
    {x: currentPos.x + 1, y: currentPos.y - 2},
    {x: currentPos.x + 2, y: currentPos.y - 1},
    {x: currentPos.x + 2, y: currentPos.y + 1},
    {x: currentPos.x + 1, y: currentPos.y + 2},
    {x: currentPos.x - 1, y: currentPos.y + 2},
    {x: currentPos.x - 2, y: currentPos.y + 1},
    {x: currentPos.x - 2, y: currentPos.y - 1},
  ]

  possibleMoves.forEach(move => {
    if (move.x <= 7 && move.x >= 0 && move.y <= 7 && move.y >= 0 && legalKnightMove(piece, boardState, move)){
      moves.push({x: move.x, y: move.y})
    }
  })


  return moves
}

const legalKnightMove = (piece, boardState, newPos) => {
  console.log(newPos)
  if (piece.toLowerCase() === piece){
  //Black Move
    if(boardState[newPos.y][newPos.x].toLowerCase() === boardState[newPos.y][newPos.x] && boardState[newPos.y][newPos.x] !== "." ) return false

  } else {
    //White Move
    if(boardState[newPos.y][newPos.x].toUpperCase() === boardState[newPos.y][newPos.x] && boardState[newPos.y][newPos.x] !== "." ) return false
  }

  return true
}
