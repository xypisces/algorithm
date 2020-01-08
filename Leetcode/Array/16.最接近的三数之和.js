/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (42.09%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    60.9K
 * Total Submissions: 144.1K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 * 
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var MAX_VALUE = 2147483647;
  
  if (nums.length < 3) return 0;
  nums.sort(function(a, b) { return a-b; }); 
  
  var i,
    len = nums.length,
    minDiff = MAX_VALUE,
    complement,
    p1,
    p2,
    curSum,
    result;
  
  for (i = 0; i < len - 2; i++) {
    complement = target - nums[i];
    p1 = i + 1;
    p2 = len - 1;
    while (p1 < p2) {
      curSum = nums[p1] + nums[p2];
      if (minDiff > Math.abs(curSum - complement)) {
        minDiff = Math.abs(curSum - complement);
        result = curSum + nums[i];
      }
      if (minDiff === 0) break;
      if (curSum > complement) {
        p2--;
      } else if (curSum < complement) {
        p1++;
      }
    }
    while (nums[i+1] === nums[i]) {
      i++;
    }
  }
  return result;
};
// @lc code=end

