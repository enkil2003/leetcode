/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) return true;
    hashMap[nums[i]] = true;
  }
  return false;
};
// @lc code=end
