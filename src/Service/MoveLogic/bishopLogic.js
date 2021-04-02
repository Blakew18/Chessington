
export const getBishopLegalMoves = (piece, currentPos, boardState, whiteMove) => {
  console.time("YEET")
  const moves = []

  if (piece.toLowerCase() === piece && whiteMove) return moves
  if (piece.toUpperCase() === piece && !whiteMove) return moves  
  
  let x = currentPos.x - 1
  let y = currentPos.y - 1
  let blockedSquare = false
  let availableSquare = true

  //CHECKING UP AND LEFT DIAGONAL
  while (x >= 0 && y >= 0 && !blockedSquare && availableSquare){
    let squareAvailability = legalBishopMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
      if (availableSquare) {
       moves.push({x: x, y: y})
      }
    x--
    y--
  }
  
  //CHECKING UP AND RIGHT DIAGONAL
  x = currentPos.x + 1
  y = currentPos.y - 1
  blockedSquare = false
  availableSquare = true
  while (x <= 7 && y >= 0 && !blockedSquare && availableSquare){
    let squareAvailability = legalBishopMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
    if (availableSquare) {
      moves.push({x: x, y: y})
     }
    x++
    y--
  }
  
  //CHECKING DOWN AND LEFT DIAGONAL
  x = currentPos.x - 1
  y = currentPos.y + 1.
  blockedSquare = false
  availableSquare = true
  while (x >= 0 && y <= 7 && !blockedSquare && availableSquare){
    let squareAvailability = legalBishopMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
    if (availableSquare) {
      moves.push({x: x, y: y})
     }
    x--
    y++
  }

  //CHECKING DOWN AND RIGHT DIAGONAL
  x = currentPos.x + 1
  y = currentPos.y + 1
  blockedSquare = false
  availableSquare = true
  while (x <= 7 && y <= 7 && !blockedSquare && availableSquare){
    let squareAvailability = legalBishopMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
    if (availableSquare) {
      moves.push({x: x, y: y})
     }
    x++
    y++
  }
  console.timeEnd("YEET")
  return moves 

}


const legalBishopMove = (piece, boardState, currentPos, newPos) => {
  let blockedPath = false
  let availableMove = false
  if (boardState[newPos.y][newPos.x] !== "."){
    blockedPath = true
  }
  if (currentPos.x === newPos.x && currentPos.y === newPos.y ){
    availableMove = false
  }
  if (piece.toLowerCase() === piece){
    //Black Move
    if(boardState[newPos.y][newPos.x].toLowerCase() === boardState[newPos.y][newPos.x] && boardState[newPos.y][newPos.x] !== "." ) {
      availableMove = false
    } else{
      availableMove = true 
    }
  } else {
    //White Move
    if(boardState[newPos.y][newPos.x].toUpperCase() === boardState[newPos.y][newPos.x] && boardState[newPos.y][newPos.x] !== "." ) {
      availableMove = false
    } else {
      availableMove = true 
    }
  }
  return {availableMove: availableMove, blockedPath: blockedPath}
}