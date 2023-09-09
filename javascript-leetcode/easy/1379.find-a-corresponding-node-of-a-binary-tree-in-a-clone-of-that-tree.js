/*
 * @lc app=leetcode id=1379 lang=javascript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
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

// var getTargetCopy = function (original, cloned, target) {
//   const dfs = (node, clonedNode) => {
//     if (!node) {
//       return;
//     }
//     if (node === target) {
//       return clonedNode;
//     }
//     return dfs(node.left, clonedNode.left) || dfs(node.right, clonedNode.right);
//   };

//   return dfs(original, cloned);
// };

// var getTargetCopy = function (original, cloned, target) {
//   const dfs = (node, clonedNode) => {
//     if (!node) {
//       return;
//     }

//     if (node === target) {
//       return clonedNode;
//     }
//     return dfs(node.left, clonedNode.left) || dfs(node.right, clonedNode.right);
//   };

//   const res = dfs(original, cloned);
//   return res;
// };

var getTargetCopy = function (original, cloned, target) {
  const stack = [];
  const clonedStack = [];
  let originalNode = original;
  let clonedNode = cloned;

  while (originalNode || stack.length) {
    while (originalNode) {
      stack.push(originalNode);
      clonedStack.push(clonedNode);
      originalNode = originalNode.left;
      clonedNode = clonedNode.left;
    }
    originalNode = stack.pop();
    clonedNode = clonedStack.pop();

    if (originalNode.val === target.val) {
      return clonedNode;
    }

    originalNode = originalNode.right;
    clonedNode = clonedNode.right;
  }
};

// const param1 = arrayToTree([7, 4, 3, null, null, 6, 19], 3);
// const param2 = arrayToTree([7, 4, 3, null, null, 6, 19], 3);
// const param3 = arrayToTree([3]);
const param1 = {
  val: 7,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 19,
      left: null,
      right: null,
    },
  },
};
const param2 = {
  val: 7,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 19,
      left: null,
      right: null,
    },
  },
};

const param3 = {
  val: 3,
  left: {
    val: 6,
    left: null,
    right: null,
  },
};
getTargetCopy(param1, param2, param3);
// @lc code=end
