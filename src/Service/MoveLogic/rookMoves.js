
import { isVerticalMove, isHorizontalMove, isDiagonalMove } from './genericMoves'


export const rookCanMove = (newPos, type, currentPos, whiteMove, boardState) => {
  console.log("ROOK")
  if ((whiteMove && type === type.toLowerCase()) || (!whiteMove && type === type.toUpperCase()) || (newPos === currentPos) ) {
    return false 
  }

 if (legalRookMove(boardState, currentPos, newPos)){
   return true
 } else {
   return false
 }

}

const legalRookMove = (boardState, currentPos, newPos) => {

  if ( isVerticalMove(currentPos, newPos, boardState) || isHorizontalMove(currentPos, newPos, boardState) ) {
    return true
  } else {
    return false
  } 
 
}

