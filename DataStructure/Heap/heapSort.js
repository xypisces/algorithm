
function __shiftDown(arr, n, k){
  while( 2*k+1 < n) { 
    let j = 2*k + 1  //获取左节点
    if( j+1 < n && arr[j+1] > arr[j]) { //判断左节点与右节点的大小
      j+=1;
    }
    if(arr[k] >= arr[j]) { break; } //判断是否当前节点已经是最大值了
    [arr[k],arr[j]] = [arr[j],arr[k]] //交换，优化：可以找到最终元素后再进行交换
    k = j;
  }
}

function heapSort(arr) {
  const n = arr.length
  for(let i = (n-1)/2; i>=0; i--){
    __shiftDown(arr, n, i);
  }
  for(let i = n-1; i>0; i--) {
    [arr[0],arr[i]] = [arr[i],arr[0]]
    __shiftDown(arr,i,0)
  }
}