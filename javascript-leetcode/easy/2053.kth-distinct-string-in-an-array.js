/*
 * @lc app=leetcode id=2053 lang=javascript
 *
 * [2053] Kth Distinct String in an Array
 */

// @lc code=start
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (array, k) {
  const map = {};
  const distinctArr = [];
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    map[letter] = (map[letter] ?? 0) + 1;
  }
  for (const [letter, count] of Object.entries(map)) {
    if (count === 1) {
      distinctArr.push(letter);
    }
  }
  return distinctArr[k - 1] ?? "";
};
// kthDistinct(["aaa", "aa", "a"], 1);
// {
//   0: [],
//   1: ["d", "a"],
//   2: ["b", "c"],
// }
// @lc code=end
