/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;
  const hashMap = {};
  for (let i = 0; i <= s.length - 1; i++) {
    const sLetter = s[i].charCodeAt(0);
    const lLetter = t[i].charCodeAt(0);
    hashMap[sLetter] = (hashMap[sLetter] ?? 0) + 1;
    hashMap[lLetter] = (hashMap[lLetter] ?? 0) - 1;
  }
  return !Object.values(hashMap).some((value) => value > 0);
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hashMap = {};
  for (let i = 0; i < s.length; i++) {
    let letterA = s[i];
    let letterB = t[i];
    hashMap[letterA] = (hashMap[letterA] ?? 0) + 1;
    hashMap[letterB] = (hashMap[letterB] ?? 0) - 1;
  }
  return !Object.values(hashMap).some((val) => val > 0);
};
// isAnagram('rat', 'car');
// @lc code=end
