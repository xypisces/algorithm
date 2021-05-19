/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (40.86%)
 * Likes:    1002
 * Dislikes: 0
 * Total Accepted:    114.1K
 * Total Submissions: 279.3K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
 * 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let start = 0;
  let end = s.length + 1;
  let left = 0;
  let right = 0;
  let valid = 0;
  let window = {};
  let need = {};
  for(let i=0; i<t.length; i++){
    let c = t[i];
    if(need[c]) { need[c]++ }
    else need[c] = 1
  }
  while(right<s.length) {
    let d = s[right];
    right++
    if(need[d]) {
      if(window[d]) window[d] ++
      else window[d] = 1
      if(window[d] === need[d]) {
        valid++
      }
    }
    while(valid === Object.keys(need).length) {
      if((right - left) < end) {
        start = left;
        end = right - left;
      }
      let v = s[left];
      left++
      if(need[v]) {
        if(need[v] === window[v]){
          valid--;
        }
        window[v]--;
      }
    }
  }
  return end === s.length+1 ? '' : s.substr(start, end);
};
// @lc code=end

