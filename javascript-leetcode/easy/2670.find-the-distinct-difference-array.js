/*
 * @lc app=leetcode id=2670 lang=javascript
 *
 * [2670] Find the Distinct Difference Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var distinctDifferenceArray = function (nums) {
//   const diff = [];
//   for (let i = 0; i < nums.length; i++) {
//     const prefix = new Set();
//     const suffix = new Set();
//     for (let j = 0; j < nums.length; j++) {
//       if (j <= i) {
//         prefix.add(nums[j]);
//       }
//       if (j > i) {
//         suffix.add(nums[j]);
//       }
//     }
//     diff[i] = prefix.size - suffix.size;
//   }
//   return diff;
// };
const distinctDifferenceArray = (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const prefix = new Set(nums.slice(0, i + 1)).size;
    const suffix = new Set(nums.slice(i, nums.length - 1)).size;
    res.push(prefix - suffix);
  }
  return res;
};
// distinctDifferenceArray([3, 2, 3, 4, 2]);
// @lc code=end
