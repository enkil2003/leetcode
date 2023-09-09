/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var postorder = function (root) {
//   if (!root) return [];
//   con  st stack = [root];
//   const queue = [];
//   while (stack.length) {
//     const node = stack.pop();
//     queue.unshift(node.val);
//     if (node.children.length) {
//       stack.push(...node.children);
//     }
//   }
//   return queue;
// };
// var postorder = (root) => {
//   if (!root) return [];

//   let res = [];
//   const dfs = (node) => {
//     if (!node) {
//       return;
//     }

//     for (let child of node.children) {
//       dfs(child);
//     }

//     res.push(node.val);
//   };

//   dfs(root);
//   return res;
// };
var postorder = (root) => {
  if (!root) return [];
  const stack = [root];
  const res = [];
  while (stack.length) {
    let tmp = stack.pop();
    res.unshift(tmp.val);
    for (let child of tmp.children) {
      stack.push(child);
    }
  }
  return res;
};
// postorder({
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
