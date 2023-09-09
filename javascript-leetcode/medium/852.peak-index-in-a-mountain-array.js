/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    let curr = arr[m];
    let next = arr[m + 1];
    let prev = arr[m - 1];

    if (prev < curr && curr > next) {
      return m;
    } else if (curr < next) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
};
// @lc code=end
