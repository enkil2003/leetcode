/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (numbers, target) {
  const hashMap = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let diff = target - num;
    if (hashMap[diff] !== undefined) {
      return [hashMap[diff] + 1, i + 1];
    }
    hashMap[num] = i;
  }
  return [-1, -1];
};

var twoSum = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    let sum = nums[l] + nums[r];

    if (sum > target) {
      r--;
    }
    if (sum < target) {
      l++;
    }
    if (sum === target) {
      return [l + 1, r + 1];
    }
  }
};
//        l   r
// twoSum([2, 7, 11, 15], 9);
// @lc code=end
