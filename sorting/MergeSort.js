// 自顶向下的递归方式
function MergeSort(arr=[], left=0, right=arr.length - 1) {
  //优化2: 可以在适当递归的时候，小数组可以使用插入排序使效率更高
  // if( right - left <= 20) {
  //   InsertSort(arr,left,right)
  //   return;
  // }
  if(left >= right) {
    return;
  }
  let mid = Math.floor((left+right)/2)
  MergeSort(arr, left, mid)
  MergeSort(arr, mid+1, right)
  //优化1：经过递归，两边的数组已经是个有序的数组了
  if( arr[mid] > arr[mid + 1]) { 
    Merge(arr, left, mid, right)
  }
  // Merge(arr, left, mid, right)
  return arr
}

function Merge(arr=[],left, mid, right) {
  let tpl = []
  for(let i=left; i<=right; i++){
    tpl[i-left] = arr[i]
  }
  let i = left, j = mid + 1
  for( let k = left; k<= right; k++){
    if( i > mid) {
      arr[k] = tpl[j - left]
      j++
    }else if ( j > right ) {
      arr[k] = tpl[i - left]
      i++
    }else if ( tpl[i-left] < tpl[j-left]) {
      arr[k] = tpl[i-left]
      i++
    }else {
      arr[k] = tpl[j-left]
      j++
    }
  }
}


// 自底向上的迭代方式
function MergeSortBu(arr=[]) {
  // i+l<n 和 Math.min() 是为了防止越界
  for( let l = 1; l<=arr.length; l+=l){
    for(let i =0; i+l<arr.length; i+=l+l){
      Merge(arr, i, i+l-1, Math.min(i+l+l-1,n-1))
    }
  }
}


module.exports = {
  MergeSort,
}