/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence2 = function (s, t) {
  if (s.length > t.length) return false;

  let count = 0; // 3
  for (let tIndex = 0, sIndex = 0; tIndex < t.length; tIndex++) {
    const sLetter = s[sIndex];
    const tLetter = t[tIndex];

    if (sLetter === tLetter) {
      count++;
      sIndex++;
    }
  }

  return count === s.length;
};
var isSubsequence = function (s, t) {
  if (s.length > s.length) return false;
  if (s === t) return true;

  let j = 0;
  for (let i = 0; i < t.length; i++) {
    let needle = s.charAt(j);
    let haystack = t.charAt(i);
    if (needle === haystack) {
      j++;
    }
    if (j === s.length) {
      return true;
    }
  }
  return false;
};
// isSubsequence('abbc', 'ahbgdc');
// @lc code=end
