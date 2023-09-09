/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var preorder = function (root) {
//   if (!root) return [];
//   let res = [];
//   const dfs = (node) => {
//     if (!node) {
//       return;
//     }

//     res.push(node.val);
//     for (let child of node.children) {
//       dfs(child);
//     }
//   };
//   dfs(root);
//   return res;
// };
var preorder = function (root) {
  const stack = [];
  const result = [];
  if (!root) {
    return result;
  }
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
    stack.push(...node.children);
  }
  return result;
};
// preorder({
//   val: 1,
//   children: [
//     {
//       val: 3,
//       children: [
//         {
//           val: 5,
//           children: [],
//         },
//         {
//           val: 6,
//           children: [],
//         },
//       ],
//     },
//     {
//       val: 2,
//       children: [],
//     },
//     {
//       val: 4,
//       children: [],
//     },
//   ],
// });
// @lc code=end
