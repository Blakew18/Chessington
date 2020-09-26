
export const stringTo2DArray = (string:string, row:number, col:number) => {
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