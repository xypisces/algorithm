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

//近乎有序的数组进行三路排序效率最好
function QuickSort3Way(arr=[],l=0, r = arr.length - 1){
  if(r <= l) {
    return;
  }
  const v = arr[l]
  let i = l+1
  let lt = l //左边的值arr[l+1...lt]
  let gt = r+1 //右边的值arr[gt,r]
  while( i < gt ) {
    if( arr[i] < v) {
      [arr[i],arr[lt+1]] = [arr[lt+1],arr[i]]
      lt++;
      i++;
    }else if(arr[i] > v) {
      [arr[i],arr[gt-1]] = [arr[gt-1],arr[i]]
      gt--;
    }else{
      i++;
    }
  }
  [arr[l],arr[lt]] = [arr[lt],arr[l]]
  QuickSort3Way(arr,l,lt-1)
  QuickSort3Way(arr,gt,r)
  return arr;
}

//浪费空间
function QuickSortJS(originArr=[]) {
  const arr = [...originArr]
  if(arr.length <= 1) {
    return arr;
  }
  const p = arr.shift()
  const centerArr = [p]
  const leftArr = [];
  const rightArr = [];
  while(arr.length){
    const current = arr.shift()
    if(current === p) {
      centerArr.push(current)
    }else if ( current > p) {
      rightArr.push(current)
    }else{
      leftArr.push(current)
    }
  }
  const leftArrSorted = QuickSortJS(leftArr)
  const rightArrSorted = QuickSortJS(rightArr)
  return leftArrSorted.concat(centerArr,rightArrSorted)
}

module.exports = {
  QuickSort,
  QuickSortJS,
  QuickSort3Way,
}