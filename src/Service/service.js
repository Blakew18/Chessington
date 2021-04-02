import {getLegalDiagonalMoves} from './MoveLogic/diagonalLogic.js';
import {getLegalAxialMoves} from './MoveLogic/axialLogic.js';


export const stringTo2DArray = (string, row, col) => {
  const arr = [];
  var count = 0;
  
  for (var i=0; i < row; i++){
    var subArr = [];
    for (var j=0; j < col; j++){
      subArr.push(string[count]);
      count++;
    }
    arr.push(subArr);
  }

  return arr;
}

export const twoDimArrayToString = (arr) => {
  return arr.toString().replace(/,/g, '')
}


export const getLegalMoves = (piece, currentPos, boardState, whiteMove) => {
  switch (true) {
    case piece.toLowerCase() === 'b':
        return getLegalDiagonalMoves(piece, currentPos, boardState, whiteMove)
    case piece.toLowerCase() === 'q':
      let arr1 = getLegalDiagonalMoves(piece, currentPos, boardState, whiteMove)
      let arr2 = getLegalAxialMoves(piece, currentPos, boardState, whiteMove)
      return arr1.concat(arr2)
    // case piece.toLowerCase() === 'b':
    //     return bishopCanMove(pos, type, currentPos, whiteMove,boardState)
    // case piece.toLowerCase() === 'n':
    //     return false
    case piece.toLowerCase() === 'r':
        return getLegalAxialMoves(piece, currentPos, boardState, whiteMove)
    // case piece.toLowerCase() === 'p':
    //     return false
    default:
        return [{x: 0, y: 0}, {x: 1, y:0}]
  }

}