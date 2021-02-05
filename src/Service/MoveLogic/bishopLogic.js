
export const getBishopLegalMoves = (piece, currentPos, boardState, whiteMove) => {
  const moves = []
  console.log(piece, whiteMove)
  if (piece.toLowerCase() === piece && whiteMove) return moves
  if (piece.toUpperCase() === piece && !whiteMove) return moves  
  //if ((piece.toLowerCase() === piece && whiteMove)|| (piece.toUpperCase() === piece && !whiteMove)) return moves 
  let x = currentPos.x - 1
  let y = currentPos.y - 1

  //CHECKING UP AND LEFT DIAGONAL
  while (x >= 0 && y >= 0 && legalBishopMove(piece, boardState, currentPos, {x: x, y: y})){
      moves.push({x: x, y: y})
    x--
    y--
  }
  //CHECKING UP AND RIGHT DIAGONAL
  x = currentPos.x + 1
  y = currentPos.y - 1
  while (x <= 7 && y >= 0 && legalBishopMove(piece, boardState, currentPos, {x: x, y: y})){
      moves.push({x: x, y: y})
    x++
    y--
  }
  //CHECKING DOWN AND LEFT DIAGONAL
  x = currentPos.x - 1
  y = currentPos.y + 1
  while (x >= 0 && y <= 7 && legalBishopMove(piece, boardState, currentPos, {x: x, y: y})){
      moves.push({x: x, y: y})
    x--
    y++
  }
  //CHECKING DOWN AND RIGHT DIAGONAL
  x = currentPos.x + 1
  y = currentPos.y + 1
  while (x <= 7 && y <= 7 && legalBishopMove(piece, boardState, currentPos, {x: x, y: y})){
      moves.push({x: x, y: y})
    x++
    y++
  }

  return moves 
}

const legalBishopMove = (piece, boardState, currentPos, newPos) => {
  console.log(boardState)
if (currentPos.x === newPos.x && currentPos.y === newPos.y ) return false
 // Checks if Piece is White or Black
 if (piece.toLowerCase() === piece){
  // Black Logic
  if (boardState[newPos.y][newPos.x].toLowerCase() === boardState[newPos.y][newPos.x] && boardState[newPos.y][newPos.x] !== "." ) return false
 } else {
  // White Logic
  if (boardState[newPos.y][newPos.x].toUpperCase() === boardState[newPos.y][newPos.x] && boardState[newPos.y][newPos.x] !== "." ) return false
 }
  return true
 
}

