/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const buildTreeFromArr = (arr, index = 0) => {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const node = new TreeNode(arr[index]);
  node.left = buildTreeFromArr(arr, 2 * index + 1);
  node.right = buildTreeFromArr(arr, 2 * index + 2);

  return node;
};

// const input = [1, null, 2, 3];
// const root = buildTreeFromArr(input);

var inorderTraversal2 = function (root) {
  // const res = [];
  // const stack = [];
  // let curr = root;
  // while (curr !== null || stack.length) {
  //   while (curr !== null) {
  //     stack.push(curr);
  //     curr = curr.left;
  //   }
  //   curr = stack.pop();
  //   res.push(curr.val);
  //   curr = curr.right;
  // }
  // return res;
};

var inorderTraversal3 = function (root) {
  if (!root) return [];
  const res = [];

  const dfs = (node) => {
    if (!node) {
      return;
    }

    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  };

  dfs(root);
  return res;
};

var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }

  return res;
};
const input = [1, null, 2, 3];

const root = new TreeNode(input[0]);
root.right = new TreeNode(input[2]);
root.right.left = new TreeNode(input[3]);

const result = inorderTraversal(root);
// @lc code=end
