/*
 * @lc app=leetcode id=2341 lang=javascript
 *
 * [2341] Maximum Number of Pairs in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  }

  let pairs = 0;
  let singles = 0;
  for (let currentFreq of Object.values(freq)) {
    while (currentFreq !== 0) {
      if (currentFreq > 1) {
        currentFreq -= 2;
        pairs += 1;
      } else {
        singles++;
        currentFreq--;
      }
    }
  }

  return [pairs, singles];
};
numberOfPairs([1, 3, 2, 1, 3, 2, 2]);
// @lc code=end
