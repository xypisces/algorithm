/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.48%)
 * Likes:    1620
 * Dislikes: 0
 * Total Accepted:    131.4K
 * Total Submissions: 530.7K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = []
    if(nums.length < 3) return results
    nums = nums.sort((a,b)=> a - b)
    let target = 0
    for(let i=0; i<nums.length - 2; i++) {
      if(nums[i] > target) break
      if(i>0 && nums[i] === nums[i-1]) continue
      let j = i + 1
      let k = nums.length - 1
      while(j<k) {
        let sum = nums[i]+nums[j]+nums[k]
        if(sum === target) {
          results.push([nums[i], nums[j], nums[k]])
          while(nums[j]===nums[j+1]) j++
          while(nums[k]===nums[k-1]) k--
          j++
          k--
        }else if(sum<target) {
          j++
        }else{
          k--
        }
      }
    }
    return results
};
/**
 解题思路：先将数组排序，当数组小于3时肯定是空数组。
 i取第一个值，如果相同则向后移去最后一个值
 k取最后一个值，j取i+1，然后j向后移遍历，同理相同的值就跳过
 */
// @lc code=end

