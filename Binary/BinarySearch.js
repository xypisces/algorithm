// 二分查找,若存在则返回值的索引，若不存在则返回-1
function binarySearch (arr, target) {
  const n = arr.length;
  let l = 0, r = n - 1;
  while( l<= r) {
    // let mid = (l+r) / 2
    let mid = l + (r-l) /2
    if(arr[mid] === target) {
      return mid
    }
    if(target < arr[mid]) {
      r = mid - 1
    }else {
      l = mid + 1
    }
  }
  return -1;
}