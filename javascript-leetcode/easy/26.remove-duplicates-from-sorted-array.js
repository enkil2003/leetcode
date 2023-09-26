/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   let insertIndex = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] !== nums[i]) {
//       nums[insertIndex] = nums[i];
//       insertIndex++;
//     }
//   }
//   return insertIndex;
// };

var removeDuplicates = function (nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
// @lc code=end
