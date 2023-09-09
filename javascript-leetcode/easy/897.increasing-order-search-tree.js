/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
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

// var increasingBST = function (node) {
//   let result = new TreeNode(0);
//   let current = result;
//   const dfs = function (node) {
//     //if current node's null, stop recursion
//     if (node == null) return;

//     //pass thru left subtree
//     dfs(node.left);

//     //visiting the node and pushing it to the result
//     current.right = new TreeNode(node.val);
//     current = current.right;

//     //continue traversing to right subtree
//     dfs(node.right);
//   };

//   dfs(node);
//   return result.right;
// };

// const tree = arrayToTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]);
// const r = increasingBST(tree);
// r;

// var increasingBST = function (node) {
//   const dummyTree = new TreeNode(0);
//   let current = dummyTree;

//   const dfs = (node) => {
//     if (!node) return;

//     dfs(node.left);

//     current.right = new TreeNode(node.val);
//     current = current.right;

//     dfs(node.right);
//   };

//   dfs(node);
//   return dummyTree.right;
// };

var increasingBST2 = function (root) {
  const dummyTree = new TreeNode(0);
  let tempNode = dummyTree;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    dfs(node.left);

    tempNode.right = new TreeNode(node.val);
    tempNode = tempNode.right;

    dfs(node.right);
  };

  dfs(root);
  return dummyTree.right;
};

// var increasingBST = function (root) {
//   if (!root) return [];
//   const tempTree = new TreeNode(0);
//   let targetNode = tempTree;

//   const dfs = (node) => {
//     if (!node) return;

//     dfs(node.left);

//     targetNode.right = new TreeNode(node.val);
//     targetNode = targetNode.right;

//     dfs(node.right);
//   };

//   dfs(root);
//   return tempTree.right;
// };

var increasingBST = function (root) {
  if (!root) return [];
  const tempTree = new TreeNode(0);
  let currentNode = tempTree;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    // llegamos al final del node izquierdo
    dfs(node.left);
    currentNode.right = new TreeNode(node.val);
    currentNode = currentNode.right;

    dfs(node.right);
  };

  dfs(root);
  return tempTree.right;
};

var increasingBST = function (root) {
  if (!root) return [];

  const stack = [];
  const tree = new TreeNode(0);
  let node = root;
  let head = tree;

  while (stack.length || node) {
    // llegamos al final de left
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    head.right = new TreeNode(node.val);
    head = head.right;
    node = node.right;
  }

  return tree.right;
};
// @lc code=end
