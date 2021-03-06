/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (71.20%)
 * Likes:    185
 * Dislikes: 0
 * Total Accepted:    26.9K
 * Total Submissions: 37.7K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let consider = []
    let paths = []
    if(!n || !k) {
      return [[]]
    }
    for(let i=0; i<n; i++) {
      consider.push(i+1)
    }
    let find = function (pre, c) {
      if(pre.length === k) {
        paths.push(pre);
      } else {
        let i, j;
        let nextC = [...c]
        for(i=0,j=nextC.length; i<j; i++) {
          let n = nextC.shift();
          let nextP = [...pre, n];
          find(nextP, nextC)
        }
      }
    }
    find([], consider)
    return paths;
};
// @lc code=end

