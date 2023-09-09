/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var countNegatives = function (grid) {
//   let cols = grid[0].length;
//   let row = grid.length - 1;
//   let col = 0;
//   let negatives = 0;

//   while (col < cols && row >= 0) {
//     let number = grid[row][col];
//     let isNegative = number < 0;

//     if (isNegative) {
//       negatives += cols - col;
//       row--;
//     } else {
//       col++;
//     }
//   }
//   return negatives;
// };

var countNegatives2 = function (grid) {
  let cols = grid[0].length;
  let rows = grid.length;

  let col = 0;
  let row = rows - 1;

  let negatives = 0;

  while (row >= 0 && col < cols) {
    const curr = grid[row][col];

    if (curr < 0) {
      negatives += cols - col;
      row--;
    } else {
      col++;
    }
  }

  return negatives;
};

var countNegatives3 = function (grid) {
  const cols = grid[0].length;
  let row = grid.length - 1;
  let col = 0;
  let count = 0;

  while (row >= 0 && col < cols) {
    if (grid[row][col] < 0) {
      count += cols - col;
      row--;
    } else {
      col++;
    }
  }
  return count;
};

var countNegatives = function (grid) {
  let l = 0;
  let r = grid.length * grid[0].length;

  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    const realMid = mid % grid[0].length;
    l++;
  }
};
countNegatives([
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
]);
// @lc code=end
