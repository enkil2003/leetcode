/*
 * @lc app=leetcode id=2442 lang=javascript
 *
 * [2442] Count Number of Distinct Integers After Reverse Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  let numSet = new Set(nums);
  for (let num of nums) {
    let reversedNum = +("" + num).split("").reverse().join("");
    numSet.add(reversedNum);
  }
  return numSet.size;
};
// countDistinctIntegers([2, 2, 2]);
// @lc code=end
