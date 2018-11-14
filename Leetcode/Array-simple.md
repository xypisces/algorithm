### 两数之和

给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        const idx = nums.indexOf(target - nums[i])
        if( idx !== -1 && idx !== i){
            arr[0] = i
            arr[1] = idx
            break;
        }
    }
    return arr
};
```

### 旋转数组

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let time = k % nums.length
    if(time>nums.length/2){
      for(let i=0; i<nums.length-time; i++){
        let target = nums.shift()
        nums.push(target)
      }
    }else{
      for(let i=0; i<time; i++){
        let target = nums.pop()
        nums.unshift(target)
      }
    }
};
```

### 只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
    for(let i=0; i<nums.length; i+=2){
      if(i+1>nums.length){
        return nums[i]
      }
      if(nums[i] !== nums[i+1]){
        return nums[i]
      }
    }
};
```

### 两个数组的交集 II

给定两个数组，编写一个函数来计算它们的交集。

```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。
- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
- 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []
    let arr1 = nums1.length>nums2.length ? nums1 : nums2
    let arr2 = nums1.length>nums2.length ? nums2 : nums1
    for(let i=0; i<arr2.length; i++){
      let k = arr1.indexOf(arr2[i])
      if(k !== -1){
        arr1[k] = null
        result.push(arr2[i])
      }
    }
    return result
};
```

### 从排序数组中删除重复项

给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

```
给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length === 0){
      return 0
    }
    let number = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== nums[number]){
            number++
          nums[number] = nums[i]
          
        }
    }
    number+=1
    return number
    // nums = [...new Set(nums)]
    // return nums.length
};
```

### 存在重复

给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let len = nums.length
  for(let i=0; i<len; i++){
    let target = nums.pop()
    if(nums.indexOf(target) !== -1){
      return true
    }
  }
  return false
};
```

### 加一

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
};
```