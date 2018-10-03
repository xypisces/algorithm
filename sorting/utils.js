function getRandomArr(n,low,high) {
  const arr = []
  if(low>high){
    [low,high] = [high,low]
  }
  for(let i=0; i<n; i++){
    arr.push(Math.floor(Math.random() * (high - low) + low))
  }
  return arr
}

function print(n=[]) {
  const s = n.join(',')
  console.log(s)
  return;
}

function isRight(arr=[]) {
  for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
      return false
    }
  }
  return true;
}

function testTime(name='',fn,arr=[]) {
  const start = Date.now()
  fn(arr)
  const end = Date.now()
  const res = (end - start) / 1000
  if(isRight(arr)){
    console.log(`${name} is use ${res} second`)
  }else{
    console.log('数组没有正确排序！')
  }
}

function copyArr(arr=[]) {
  const arr2 = [...arr]
  return arr2
}


module.exports = {
  getRandomArr,
  print,
  testTime,
  copyArr,
}