/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (33.35%)
 * Likes:    3304
 * Dislikes: 0
 * Total Accepted:    499K
 * Total Submissions: 1.5M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length === 1) return s
  let maxRes = 0, maxStr = '';
  for(let i=0; i<s.length; i++) {
    let str1 = palindrome(s, i, i);
    let str2 = palindrome(s, i, i+1);
    if(str1.length > maxRes) {
      maxStr = str1;
      maxRes = str1.length;
    }
    if(str2.length > maxRes) {
      maxStr = str2;
      maxRes = str2.length;
    }
  }
  return maxStr
};
var palindrome = function(s, l, r) {
  while(l>=0 && r<s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l+1, r);
}
// @lc code=end

