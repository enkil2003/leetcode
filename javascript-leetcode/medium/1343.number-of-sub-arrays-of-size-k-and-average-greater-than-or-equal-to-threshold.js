/*
 * @lc app=leetcode id=1343 lang=javascript
 *
 * [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let l = 0;
  let r = 0;
  let ans = 0;
  let currentSum = 0;
  while (r < arr.length) {
    currentSum += arr[r];
    if (r - l >= k - 1) {
      if (r - l > k - 1) {
        currentSum -= arr[l];
        l++;
      }
      if (currentSum / k >= threshold) {
        ans++;
      }
    }
    r++;
  }
  return ans;
};
// numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4);
// @lc code=end
