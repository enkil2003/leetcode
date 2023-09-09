/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
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

// var rangeSumBST = function (root, low, high) {
//   let sum = 0;
//   const dfs = (node) => {
//     if (!node) {
//       return;
//     }
//     if (node.val >= low && node.val <= high) {
//       sum += node.val;
//     }
//     dfs(node.left);
//     dfs(node.right);
//   };
//   dfs(root);
//   return sum;
// };

var rangeSumBST = function (root, low, high) {
  let sum = 0;
  const dfs = (node) => {
    if (!node) {
      return;
    }
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return sum;
};
// const param = arrayToTree([10, 5, 15, 3, 7, null, 18]);
// const r = rangeSumBST(param, 7, 15);
// r;
// @lc code=end
