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
var twoSum2 = (nums, target) => {
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

var twoSum = (nums, target) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap[diff] !== undefined) {
      return [i, hashMap[diff]];
    }
    hashMap[nums[i]] = i;
  }
};
// @lc code=end
