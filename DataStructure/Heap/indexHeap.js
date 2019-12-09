//i 是从0开始的
function Insert(i, item) {
  const k = i+1;
  arr.push(item)
  indexes.push(i)
  const l = arr.length
  __shiftUp(l)
}

function pop() {
  let l = arr.length
  const ret = arr[indexes[1]]
  [indexes[1], indexes[l]] = [indexes[l], indexes[1]]
  arr.pop();
  __shiftDown(1)
  return ret
}



function __shiftUp(k) {
  while (k > 1 && arr[indexes[k/2]] < arr[indexes[k]]) {
    [indexes[k/2], indexes[k]] = [indexes[k], indexes[k/2]]
    k/=2
  }
}

function __shiftDown(){
  while( 2*k <= arr.length) { 
    let j = 2*k  //获取左节点
    if( j+1 <= arr.length && arr[ indexes[j+1] ] > arr[indexes[j]]) { //判断左节点与右节点的大小
      j+=1;
    }
    if(arr[indexes[k]] >= arr[indexes[j]]) { break; } //判断是否当前节点已经是最大值了
    [indexes[k],indexes[j]] = [indexes[j],indexes[k]] //交换，优化：可以找到最终元素后再进行交换
    k = j;
  }
}