/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = {};
    let maxLen = 0;
    let left = 0; 
    let right = 0;
    while(right < s.length) {
      let c = s[right];
      right++;
      if(window[c]) {
        window[c]++;
      } else {
        window[c] = 1
      }
      while(window[c] > 1) {
        let d = s[left]
        left++
        window[d]--;
      }
      if(maxLen < right - left) {
        maxLen = right - left;
      }
    }
    return maxLen;
};
// @lc code=end

