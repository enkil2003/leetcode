/*
 * @lc app=leetcode id=1748 lang=javascript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const hash = new Map();

  for (const num of nums) {
    hash.set(num, (hash.get(num) ?? 0) + 1);
  }

  let answer = 0;
  for (const [number, freq] of hash.entries()) {
    if (freq === 1) answer += number;
  }
  return answer;
};
// sumOfUnique([10, 6, 9, 6, 9, 6, 8, 7]);
// @lc code=end
