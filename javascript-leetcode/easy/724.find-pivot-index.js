/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex2 = function (nums) {
  let leftSum = 0;
  let total = nums.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

var pivotIndex = function (nums) {
  let leftSum = 0;
  let totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
pivotIndex([1, 7, 3, 6, 5, 6]);
// @lc code=end
