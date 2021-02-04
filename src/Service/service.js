
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


export const getLegalMoves = (piece, currentPos) => {
  return [{x: 0, y: 0}, {x: 1, y:1}]; 
}