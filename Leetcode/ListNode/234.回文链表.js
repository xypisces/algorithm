/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (45.74%)
 * Likes:    886
 * Dislikes: 0
 * Total Accepted:    204.7K
 * Total Submissions: 447.6K
 * Testcase Example:  '[1,2,2,1]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let right = reverse(findCenter(head));
  let left = head;
  while(right !== null) {
    if(left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};

var findCenter = function(head) {
  let slower = head, faster = head;
  while(faster && faster.next !== null) {
    slower = slower.next;
    faster.next = faster.next.next;
  }
  if(faster !== null) {
    slower = slower.next;
  }
  return slower
}

function reverse(head) {
  let prev = null, cur = head, nxt = head;
  while(cur !== null) {
    nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}
// @lc code=end

