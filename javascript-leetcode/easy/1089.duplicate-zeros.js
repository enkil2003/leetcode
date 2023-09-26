/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

function insert(arr, i, j) {
  if (j < arr.length) {
    arr[j] = arr[i];
  }
}
function duplicateZeros(arr) {
  let zeroes = 0;
  for (const num of arr) {
    if (num === 0) {
      zeroes++;
    }
  }
  let i = arr.length - 1;
  let j = arr.length + zeroes - 1;

  while (i !== j) {
    insert(arr, i, j--);
    if (arr[i] === 0) {
      insert(arr, i, j--);
    }
    i--;
  }
  return arr;
}
// duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
// @lc code=end
