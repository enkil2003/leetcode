/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// function arrayToTree(arr, index = 0) {
//   if (index >= arr.length || arr[index] === null) {
//     return null;
//   }

//   const node = new TreeNode(arr[index]);
//   node.left = arrayToTree(arr, 2 * index + 1);
//   node.right = arrayToTree(arr, 2 * index + 2);

//   return node;
// }

// var mergeTrees = function (root1, root2) {
//   if (!root1) return root2;
//   if (!root2) return root1;

//   root1.val += root2.val;
//   root1.left = mergeTrees(root1.left, root2.left);
//   root1.right = mergeTrees(root1.right, root2.right);
//   return root1;
// };

var mergeTrees2 = function (root1, root2) {
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  const dfs = (node1, node2) => {
    if (!node1) {
      return node2;
    }
    if (!node2) {
      return node1;
    }
    node1.val += node2.val;
    node1.left = dfs(node1.left, node2.left);
    node1.right = dfs(node1.right, node2.right);
    return node1;
  };

  dfs(root1, root2);
  return root1;
};

// var mergeTrees = function (root1, root2) {
//   if (!root1) return root2;
//   if (!root2) return root1;

//   root1.val += root2.val;
//   root1.left = mergeTrees(root1.left, root2.left);
//   root1.right = mergeTrees(root1.right, root2.right);

//   return root1;
// };
// var mergeTrees = function (root1, root2) {
//   if (!root1) return root2;
//   const stack = [[root1, root2]];

//   while (stack.length) {
//     let [node1, node2] = stack.pop();
//     if (!node2) continue;

//     node1.val += node2.val;

//     if (node1.left) {
//       stack.push([node1.left, node2.left]);
//     } else {
//       node1.left = node2.left;
//     }

//     if (node1.right) {
//       stack.push([node1.right, node2.right]);
//     } else {
//       node1.right = node2.right;
//     }
//   }
//   // root1.val += root2.val;
//   // root1.left = mergeTrees(root1.left, root2.left);
//   // root1.right = mergeTrees(root1.right, root2.right);

//   return root1;
// };
// var mergeTrees = function (root1, root2) {
//   if (!root1) return root2;
//   if (!root2) return root1;

//   root1.val += root2.val;
//   root1.left = mergeTrees(root1.left, root2.left);
//   root1.right = mergeTrees(root1.right, root2.right);

//   return root1;
// };

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const stack = [[root1, root2]];
  while (stack.length) {
    const [node1, node2] = stack.pop();

    if (!node2) continue;

    if (node1.left) {
      stack.push([node1.left, node2.left]);
    } else {
      node1.left = node2.left;
    }

    if (node1.right) {
      stack.push([node1.right, node2.right]);
    } else {
      node1.right = node2.right;
    }
  }

  return root1;
};
// const tree1 = arrayToTree([1, 3, 2, 5]);
// const tree2 = arrayToTree([2, 1, 3, null, 4, null, 7]);
// const r = mergeTrees(tree1, tree2);
// r;
// @lc code=end
