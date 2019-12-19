/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (35.96%)
 * Likes:    345
 * Dislikes: 0
 * Total Accepted:    45.5K
 * Total Submissions: 125.4K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const results = []
    if(nums.length < 4) return results
    nums = nums.sort((a,b) => a-b)
    const l = nums.length
    for(let i=0; i<l-3; i++){
      if(i>0 && nums[i] === nums[i-1]) continue
      let iMin = nums[i] + nums[i+1] + nums[i+2] + nums[i+3]
      let iMax = nums[i] + nums[l-1] + nums[l-2] + nums[l-3]
      if(iMin > target) break
      if(target > iMax) continue
      for(let j=i+1; j<l-2; j++){
        if(j>i+1 && nums[j] === nums[j-1]) continue
        let k = j+1
        let m = l-1
        let jMin = nums[j] + nums[k] + nums[k+1] + nums[i]
        let jMax = nums[j] + nums[m] + nums[m-1] + nums[i]
        if(jMin > target) continue
        if(target > jMax) continue
        while(k<m){
          let sum = nums[i]+nums[j]+nums[k]+nums[m];
          if(sum === target) {
            results.push([nums[i],nums[j],nums[k],nums[m]])
            while(nums[k]===nums[k+1]) k++
            while(nums[m]===nums[m-1]) m--
            k++
            m--
          }else if(sum<target) {
            k++
          }else{
            m--
          }
        }
      }
    }
    return results
};
// @lc code=end

