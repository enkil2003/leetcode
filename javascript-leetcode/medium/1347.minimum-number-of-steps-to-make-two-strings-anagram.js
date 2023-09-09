/*
 * @lc app=leetcode id=1347 lang=javascript
 *
 * [1347] Minimum Number of Steps to Make Two Strings Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    const letter1 = s[i];
    const letter2 = t[i];
    hashMap[letter1] = (hashMap[letter1] ?? 0) + 1;
    hashMap[letter2] = (hashMap[letter2] ?? 0) - 1;
  }
  const res = Object.values(hashMap).reduce((acc, cur) => acc + cur, 0);
  return res;
};
minSteps("leetcode", "practice");
// @lc code=end
