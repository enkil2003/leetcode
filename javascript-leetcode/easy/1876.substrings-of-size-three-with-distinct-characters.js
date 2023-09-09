/*
 * @lc app=leetcode id=1876 lang=javascript
 *
 * [1876] Substrings of Size Three with Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  const goodSubStrings = [];
  for (let i = 0; i <= s.length - 3; i++) {
    let j = i + 1;
    let k = j + 1;
    const letter1 = s[i];
    const letter2 = s[j];
    const letter3 = s[k];

    if (letter1 !== letter2 && letter1 !== letter3 && letter2 !== letter3) {
      goodSubStrings.push(s.slice(i, k + 1));
    }
  }
  return goodSubStrings.length;
};
// countGoodSubstrings("xyzzaz");
// @lc code=end
