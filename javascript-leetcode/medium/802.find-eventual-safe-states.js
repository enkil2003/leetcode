/*
 * @lc app=leetcode id=802 lang=javascript
 *
 * [802] Find Eventual Safe States
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
// var eventualSafeNodes = function (graph) {
//   let n = graph.length;
//   const safe = {};

//   const dfs = (i) => {
//     if (safe[i] !== undefined) {
//       return safe[i];
//     }
//     safe[i] = false;
//     for (const nei of graph[i]) {
//       if (!dfs(nei)) {
//         return false;
//       }
//     }
//     safe[i] = true;
//     return true;
//   };

//   const res = [];
//   for (let i = 0; i < n; i++) {
//     if (dfs(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// };

var eventualSafeNodes = function (graph) {
  let n = graph.length;
  const safe = {};

  const dfs = (i) => {
    // [1, 2]
    if (safe[i] !== undefined) {
      return safe[i];
    }
    safe[i] = false;
    // for (let j = 0; j < graph[i]; j++) {
    // let nei = graph[j];
    const neighbors = graph[i];
    for (const neighbor of neighbors) {
      if (!dfs(neighbor)) {
        return false;
      }
    }
    safe[i] = true;
    return safe[i];
  };

  const res = [];
  for (let i = 0; i < n; i++) {
    // [1 , 2]
    if (dfs(i)) {
      res.push(i);
    }
  }

  return res;
};
//                       i
// eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]);
// @lc code=end
