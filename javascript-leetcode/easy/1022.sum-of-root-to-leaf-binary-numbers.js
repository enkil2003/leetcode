/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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

var sumRootToLeaf2 = function (root) {
  let sum = 0;

  const dfs = (node, path) => {
    if (!node) return;

    if (!node.left && !node.right) {
      sum += parseInt(path + node.val, 2);
      return;
    }

    dfs(node.left, path + node.val);
    dfs(node.right, path + node.val);
  };

  dfs(root, "");
  return sum;
};

var sumRootToLeaf = function (root) {
  let sum = 0;
  let stack = [[root, 0]];

  while (stack.length) {
    let [node, currentNumber] = stack.pop();

    currentNumber = (currentNumber << 1) | node.val;

    if (!node.left && !node.right) {
      sum += parseInt(node.val, 2);
      continue;
    }
    stack.push(node.left);
    stack.push(node.right);
  }
  return sum;
};

sumRootToLeaf(arrayToTree([1, 0, 1, 0, 1, 0, 1]));
// @lc code=end
