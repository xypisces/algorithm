// 自顶向下的递归方式
function QuickSort(arr=[], l=0, r=arr.length-1) {
  if(l >= r) {
    return;
  }
  let p = partition2(arr, l, r)
  QuickSort(arr, l, p-1)
  QuickSort(arr, p+1, r)
}

// 返回p,使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
function partition(arr, l, r) {
  //优化1: 随机选择数组中的一个值作为判断值
  let v = arr[l]
  let j = l
  // arr[l+1...j] < v ; arr[j+1...i) > v
  for( let i= l+1; i<=r; i++) {
    if(arr[i] < v) {
      [arr[j+1], arr[i]] = [arr[i], arr[j+1]]
      j++
    }
  }
  [arr[l],arr[j]] = [arr[j], arr[l]]
  return j
}

function partition2(arr, l, r) {
  //生成随机索引,有bug
  // let t = Math.floor(Math.random() * (r-l)) + l
  // console.log(t)
  // [arr[l],arr[t]] = [arr[t],arr[l]]
  let v = arr[l]
  let i = l+1, j=r;
  while(true){
    while(i<=r && arr[i] < v) { i++; }
    while(j>=l+1 && arr[j] > v) { j--; }
    if(i > j) { break; }
    [arr[i],arr[j]] = [arr[j],arr[i]]
    i++;
    j--;
  }
  [arr[l],arr[j]] = [arr[j],arr[l]]
  return j
}


module.exports = {
  QuickSort,
}