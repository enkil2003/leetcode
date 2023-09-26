/*
 * @lc app=leetcode id=2161 lang=javascript
 *
 * [2161] Partition Array According to Given Pivot
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const prefix = [];
  const postfix = [];
  // O(n)
  while (nums.length) {
    const num = nums.shift();
    if (num < pivot) {
      prefix.push(num);
    } else if (num > pivot) {
      postfix.push(num);
    } else {
      postfix.unshift(num);
    }
  }
  // memory O(n)
  return prefix.concat(postfix);
};
// pivotArray([9, 12, 5, 10, 14, 3, 10], 10);
// @lc code=end
