/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const char1 = s[i];
    const char2 = t[i];

    if (
      (map[char1] && map[char1] !== char2) ||
      (map2[char2] && map2[char2] !== char1)
    ) {
      return false;
    }
    map[char1] = char2;
    map2[char2] = char1;
  }
  return true;
};
// @lc code=end
