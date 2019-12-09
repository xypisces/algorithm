const utils = require('./utils')
const { MergeSort } = require('./MergeSort')
const { QuickSort, QuickSortJS, QuickSort3Way }  = require('./QuickSort')
;(async() => {
  const n = 100000
  const arr = utils.getRandomArr(n,1,n)
  const arr2 = utils.copyArr(arr)
  // const arr3 = utils.copyArr(arr)
  // const arr4 = utils.copyArr(arr)
  // const arr5 = utils.copyArr(arr)
  // 选择排序例子
  // QuickSort3Way(arr)
  // utils.print(arr)
  // utils.print(arr2)
  // 测试使用时间
  // utils.testTime('选择算法',selectSort,arr)
  utils.testTime('插入排序', InsertSort, arr)
  // utils.testTime('插入排序优化版', newInsertSort, arr)
  // utils.testTime('冒泡排序', BubbleSort, arr4)
  // utils.testTime('希尔排序', ShellSort, arr5)
  // utils.testTime('归并排序', MergeSort, arr)
  // utils.testTime('快速排序', QuickSort, arr)
  utils.testTime('三路快速排序', QuickSortJS, arr2)
})()

// o(n^2)的排序算法
// 冒泡排序
function BubbleSort(arr = []) {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length - i; j++){
      if(arr[j]<arr[j-1]){
        [arr[j-1], arr[j]] = [arr[j],arr[j-1]]
      }
    }
  }
  return arr
}
// 选择排序
function selectSort(arr = []) {
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(arr[i] > arr[j]) {
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr;
}
// 插入排序
function InsertSort(arr = []) {
  for(let i=1; i<arr.length; i++) {
    for( let j = i; j > 0; j--) {
      if(arr[j] < arr[j - 1]) {
        [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
      }else{
        break;
      }
    }
  }
}
// 插入排序优化版
function newInsertSort(arr = []) {
  for(let i=1; i<arr.length; i++) {
    let j;
    for( j = i; j > 0 && arr[i] < arr[j - 1]; j--) {
      arr[j] = arr[j-1]
    }
    [arr[i],arr[j]] = [arr[j],arr[i]]
  }
}
// 希尔排序 -- 插入排序衍生
function ShellSort(arr=[]) {
  let l = arr.length
  let gap = Math.floor(l/2)
  while(gap>0){
    for(let i=gap; i<l; i++){
      for(let j=i; j>0; j-=gap){
        if(arr[j] < arr[j - gap]) {
          [arr[j],arr[j-gap]] = [arr[j-gap],arr[j]]
        }else{
          break;
        }
      }
    }
    gap = Math.floor(gap/2)
  }
}