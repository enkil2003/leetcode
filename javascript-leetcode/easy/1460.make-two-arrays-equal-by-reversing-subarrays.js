/*
 * @lc app=leetcode id=1460 lang=javascript
 *
 * [1460] Make Two Arrays Equal by Reversing Subarrays
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const occurrences = {};
  for (let i = 0; i < target.length; i++) {
    const number = target[i];
    const number2 = arr[i];
    occurrences[number] = (occurrences[number] ?? 0) + 1;
    occurrences[number2] = (occurrences[number2] ?? 0) - 1;
  }
  let areEqual =
    Object.values(occurrences).filter((val) => val > 0).length === 0;
  return areEqual;
};
// @lc code=end
