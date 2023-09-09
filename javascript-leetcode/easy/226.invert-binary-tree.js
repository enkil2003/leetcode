/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
var invertTree2 = function (root) {
  if (root) {
    let tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
  }
  return root;
};

var invertTree3 = function (root) {
  if (root) {
    const tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
  }
  return root;
};

var invertTree4 = function (root) {
  if (!root) return root;
  let tmpNode = root.left;
  root.left = root.right;
  root.right = tmpNode;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// var invertTree = function (root) {
//   if (!root) return root;
//   const stack = [];
//   let currentNode = root;

//   while (currentNode || stack.length) {
//     while (currentNode) {
//       stack.push(currentNode);
//       let tmp = currentNode.left;
//       currentNode.left = currentNode.right;
//       currentNode.right = tmp;
//     }
//   }
// }
var invertTree = function (root) {
  if (!root) return root;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return root;
};
// const tree = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
// const r = invertTree(tree);
// r;
// @lc code=end
