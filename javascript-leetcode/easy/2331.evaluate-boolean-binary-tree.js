/*
 * @lc app=leetcode id=2331 lang=javascript
 *
 * [2331] Evaluate Boolean Binary Tree
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
 * @return {boolean}
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
const FALSE = 0;
const TRUE = 1;
const OR = 2;
const AND = 3;

// var evaluateTree = function (root) {
//   const dfs = (node) => {
//     if (!node.left && !node.right) {
//       return node.val === TRUE;
//     }

//     if (node.val === OR) {
//       //          true              false
//       return dfs(node.left) || dfs(node.right);
//     }

//     if (node.val === AND) {
//       //         false
//       return dfs(node.left) && dfs(node.right);
//     }
//   };

//   return dfs(root);
// };

var evaluateTree = function (root) {
  const dfs = (node) => {
    // leaf node
    if (!node.left && !node.right) {
      // is this leaf node true or false?
      return node.val === TRUE;
    }

    // not a leaf node
    // check or or and value
    if (node.val === OR) {
      return dfs(node.left) || dfs(node.right);
    }

    if (node.val === AND) {
      return dfs(node.left) && dfs(node.right);
    }
  };

  return dfs(root);
};

// const r = evaluateTree(arrayToTree([2, 1, 3, null, null, 0, 1]));
// r;
// @lc code=end

// 0 => False
// 1 => True
// 2 => Or
// 3 => and
