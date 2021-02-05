import {getBishopLegalMoves} from './MoveLogic/bishopLogic.js'

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
        return getBishopLegalMoves(piece, currentPos, boardState, whiteMove)
    // case piece.toLowerCase() === 'q':
    //     return queenCanMove(pos, type, currentPos, whiteMove,boardState)
    // case piece.toLowerCase() === 'b':
    //     return bishopCanMove(pos, type, currentPos, whiteMove,boardState)
    // case piece.toLowerCase() === 'n':
    //     return false
    // case piece.toLowerCase() === 'r':
    //     return rookCanMove(pos, type, currentPos, whiteMove,boardState)
    // case piece.toLowerCase() === 'p':
    //     return false
    default:
        return [{x: 0, y: 0}, {x: 1, y:0}]
  }

}