var isValidSudoku = function(board) {
  for(let i=0; i<board.length; i++){
    if(!checked(board[i])) return false
    let newArr = []
    for(let j=0; j<board[i].length; j++){
      newArr.push(board[j][i])
    }
    if(!checked(newArr)) return false
  }
  for(let r = 0; r<3; r++){
    for(let c=0; c<3; c++){
      let arr3 = []
      for(let i = r*3; i<r*3+3; i++){
        for(let j=c*3; j<c*3+3; j++){
          arr3.push(board[i][j])
        }
      }
      if(!checked(arr3)) return false
    }
  }
  return true
};
function checked(arr){
  let newArr = arr.filter(i => i!=='.')
  if(newArr.length !== [...new Set(newArr)].length){
    return false
  }
  return true
}

const arr = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

const val = isValidSudoku(arr)
console.log(val)