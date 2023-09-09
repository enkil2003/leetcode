/*
 * @lc app=leetcode id=547 lang=javascript
 *
 * [547] Number of Provinces
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// var findCircleNum = function (isConnected) {
//   let provinces = 0;
//   const visited = new Array(isConnected.length).fill(false);

//   const dfs = (node) => {
//     visited[node] = true;
//     for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
//       if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
//         dfs(neighbor);
//       }
//     }
//   };

//   for (let i = 0; i < isConnected.length; i++) {
//     if (!visited[i]) {
//       dfs(i);
//       provinces++;
//     }
//   }

//   return provinces;
// };

var findCircleNum = function (isConnected) {
  let provinces = 0;
  const visited = new Array(isConnected.length).fill(false);

  const dfs = (node) => {
    visited[node] = true;
    for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
      if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(i);
      provinces++;
    }
  }
  return provinces;
};
// @lc code=end
