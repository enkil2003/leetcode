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
const containsDuplicate2 = (nums) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) return true;
    hashMap[nums[i]] = true;
  }
  return false;
};

const containsDuplicate = (nums) => {
  const set = new Set();
  for (let i of nums) {
    if (set.has(i)) {
      return true;
    }
    set.add(i);
  }
  return false;
};
// @lc code=end
