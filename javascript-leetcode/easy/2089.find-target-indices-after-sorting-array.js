/*
 * @lc app=leetcode id=2089 lang=javascript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];

  const bs = (bias) => {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      let curr = nums[mid];

      if (curr === target) {
        res.push(mid);
        if (bias) {
          l++;
        } else {
          r--;
        }
      } else if (curr < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  };

  return;
};
// @lc code=end
