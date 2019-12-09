
// 插入一个元素并且维护最大堆
function shiftUp(arr,item) {
  arr.push(item)
  let k = arr.length
  // 真正的操作
  while( k > 1 && arr[k/2] < arr[k] ) {
    [arr[k/2],arr[k]] = [arr[k],arr[k/2]]
    k /= 2
  }
  // 真正的操作
}

// 取出元素
function shiftDown(arr) {
  const l = arr.length
  const ret = arr[0]
  [arr[0],arr[l-1]] = [arr[l-1],arr[0]]
  arr.pop()
  let k = 1
  // 真正的操作
  while( 2*k <= arr.length) { 
    let j = 2*k  //获取左节点
    if( j+1 <= arr.length && arr[j+1] > arr[j]) { //判断左节点与右节点的大小
      j+=1;
    }
    if(arr[k] >= arr[j]) { break; } //判断是否当前节点已经是最大值了
    [arr[k],arr[j]] = [arr[j],arr[k]] //交换，优化：可以找到最终元素后再进行交换
    k = j;
  }
  // 真正的操作
  return ret
}

//将数组转化成堆结构的数组
function heapift(arr) {
  let data = new Array(arr.length + 1)  //堆数组的第一个元素不放元素
  for(let i=0; i<arr.length; i++){
    data[i+1] = arr[i]
  }
  for(let i = arr.length/2; i>=1; i++){
    shiftDown(i) //while部分开始
  }
}

module.exports = {
  shiftUp,
  shiftDown,
  heapift,
}