/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (71.08%)
 * Likes:    846
 * Dislikes: 0
 * Total Accepted:    620.9K
 * Total Submissions: 873.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 
 * 
 * 
 * 
 * 
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // 动态规划
  // let res = []
  // if(root === null) return res;
  // res.push(root.val);
  // res = res.concat(preorderTraversal(root.left));
  // res = res.concat(preorderTraversal(root.right));
  // return res;
  // 递归遍历方法
  // let res = [];
  // const traverse = (root) => {
  //   if(root === null) return;
  //   res.push(root.val);
  //   traverse(root.left);
  //   traverse(root.right);
  // }
  // traverse(root);
  // return res;
  let res = [];
  if(root === null) return res;
  let stack = [];
  let cur = root;
  while(cur || stack.length > 0){
    while(cur){
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return res;
};
// @lc code=end

