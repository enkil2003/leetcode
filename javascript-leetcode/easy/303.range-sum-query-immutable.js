/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefixSum = [];
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    this.prefixSum.push(cur);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let rightSum = this.prefixSum[right];
  let leftSum = left > 0 ? this.prefixSum[left - 1] : 0;
  return rightSum - leftSum;
};
const nums = new NumArray([-2, 0, 3, -5, 2, -1]);
nums.sumRange(0, 2);
// nums.sumRange(2, 5);
// nums.sumRange(0, 5);

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
