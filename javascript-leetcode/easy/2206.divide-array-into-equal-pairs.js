/*
 * @lc app=leetcode id=2206 lang=javascript
 *
 * [2206] Divide Array Into Equal Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const hashMap = new Map();
  for (let num of nums) {
    hashMap[num] = (hashMap[num] ?? 0) + 1;
  }
  for (let count of Object.values(hashMap)) {
    if (count % 2 !== 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end
