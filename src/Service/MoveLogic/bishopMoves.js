
import { isVerticalMove, isHorizontalMove, isDiagonalMove } from './genericMoves'


export const bishopCanMove = (newPos, type, currentPos, whiteMove, boardState) => {
  if ((whiteMove && type === type.toLowerCase()) || (!whiteMove && type === type.toUpperCase()) || (newPos === currentPos) ) {
    return false 
  }

 if (legalBishopMove(boardState, currentPos, newPos)){
   return true
 } else {
   return false
 }

}

const legalBishopMove = (boardState, currentPos, newPos) => {

  if ( isDiagonalMove(currentPos, newPos, boardState) ) {
    return true
  } else {
    return false
  } 
 
}

