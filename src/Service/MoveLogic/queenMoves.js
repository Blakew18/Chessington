
import { isVerticalMove, isHorizontalMove, isDiagonalMove } from './genericMoves'


export const queenCanMove = (newPos, type, currentPos, whiteMove, boardState) => {
  if ((whiteMove && type === type.toLowerCase()) || (!whiteMove && type === type.toUpperCase()) || (newPos === currentPos) ) {
    return false 
  }

 if (legalQueenMove(boardState, currentPos, newPos)){
   return true
 } else {
   return false
 }

}

const legalQueenMove = (boardState, currentPos, newPos) => {

  if ( isVerticalMove(currentPos, newPos, boardState) || isHorizontalMove(currentPos, newPos, boardState) || isDiagonalMove(currentPos, newPos, boardState) ) {
    return true
  } else {
    return false
  } 
 
}

