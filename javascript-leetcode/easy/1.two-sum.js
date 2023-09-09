/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const delta = target - nums[i];
    if (hashMap[delta] !== undefined) {
      return [hashMap[delta], i];
    }
    hashMap[nums[i]] = i;
  }
  return false;
};
// @lc code=end
