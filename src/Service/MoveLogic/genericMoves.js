export const isVerticalMove = (currentPos, newPos, boardState) => {
  if ( currentPos.x === newPos.x && !obstructedVertical(currentPos, newPos, boardState) ){
    return true
  } else {
    return false
  }
}

export const isHorizontalMove = (currentPos, newPos, boardState) => {
  if (currentPos.y === newPos.y) {
    return true
  } else {
    return false
  }
}

export const isDiagonalMove = (currentPos, newPos, boardState) => {

  const xDiff = Math.abs(currentPos.x - newPos.x);
  const yDiff = Math.abs(currentPos.y - newPos.y);
  
  if (xDiff === yDiff) {
    return true
  } else {
    return false
  } 
}

const obstructedVertical = (currentPos, newPos, boardState ) => {

  const startPoint = currentPos.y
  const endPoint = newPos.y
 
  if (endPoint > startPoint){
    var i = startPoint + 1
    while ( i < endPoint ){
      console.log(i)
      if(boardState[i][currentPos.x] != "."){
        return true
      } 
      i++
    return false
    }

  } else {
    console.log("ELSE")
    var i = startPoint - 1
    while ( i > endPoint ){
      if(boardState[i][currentPos.x] != "."){
        return true
      } 
      i--
    return false
    } 

  }
  
  


}
