/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let hashMap = {};
//   let maxOccurrence = -Infinity;
//   let res = null;
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     hashMap[num1] = (hashMap[num1] ?? 0) + 1;
//     if (maxOccurrence < hashMap[num1]) {
//       res = num1;
//       maxOccurrence = hashMap[num1];
//     }
//   }
//   return res;
// };
var majorityElement2 = function (nums) {
  let count = 0,
    res = 0;
  for (const num of nums) {
    if (count === 0) res = num;
    count += res === num ? 1 : -1;
  }
  return res;
};
var majorityElement = function (nums) {
  let res = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (count === 0) {
      res = num;
    }
    count += res === num ? 1 : -1;
  }
  return res;
};
// @lc code=end
