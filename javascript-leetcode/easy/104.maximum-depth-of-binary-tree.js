/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function arrayToTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const node = new TreeNode(arr[index]);
  node.left = arrayToTree(arr, 2 * index + 1);
  node.right = arrayToTree(arr, 2 * index + 2);

  return node;
}

var maxDepth = function (root) {
  if (!root) return 0;
  if (root.length === 1) return 1;

  let depth = 0;
  const dfs = (node, nodeDepth) => {
    if (!node) return;

    depth = Math.max(nodeDepth, depth);

    dfs(node.left, nodeDepth + 1);
    dfs(node.right, nodeDepth + 1);
  };

  dfs(root, 1);
  return depth;
};
// maxDepth([3, 9, 20, null, null, 15, 7]);
// @lc code=end
