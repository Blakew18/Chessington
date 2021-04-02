export const getLegalAxialMoves = (piece, currentPos, boardState, whiteMove) => {
  console.time("YEET")
  const moves = []

  if (piece.toLowerCase() === piece && whiteMove) return moves
  if (piece.toUpperCase() === piece && !whiteMove) return moves  
  
  let x = currentPos.x - 1
  let y = currentPos.y
  let blockedSquare = false
  let availableSquare = true

  //CHECKING LEFT
  while (x >= 0 && !blockedSquare && availableSquare){
    let squareAvailability = legalAxialMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
      if (availableSquare) {
       moves.push({x: x, y: y})
      }
    x--
  }
  
  //CHECKING RIGHT
  x = currentPos.x + 1
  y = currentPos.y
  blockedSquare = false
  availableSquare = true
  while (x <= 7 && !blockedSquare && availableSquare){
    let squareAvailability = legalAxialMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
    if (availableSquare) {
      moves.push({x: x, y: y})
     }
    x++
  }
  
  //CHECKING UP
  x = currentPos.x
  y = currentPos.y - 1.
  blockedSquare = false
  availableSquare = true
  while (y >= 0 && !blockedSquare && availableSquare){
    let squareAvailability = legalAxialMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
    if (availableSquare) {
      moves.push({x: x, y: y})
     }
    y--
  }

  //CHECKING DOWN
  x = currentPos.x
  y = currentPos.y + 1
  blockedSquare = false
  availableSquare = true
  while (y <= 7 && !blockedSquare && availableSquare){
    let squareAvailability = legalAxialMove(piece, boardState, currentPos, {x: x, y: y})
    blockedSquare = squareAvailability.blockedPath
    availableSquare = squareAvailability.availableMove
    if (availableSquare) {
      moves.push({x: x, y: y})
     }
    y++
  }
  console.timeEnd("YEET")
  return moves 

}


const legalAxialMove = (piece, boardState, currentPos, newPos) => {
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
