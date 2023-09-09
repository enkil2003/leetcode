/*
 * @lc app=leetcode id=2309 lang=javascript
 *
 * [2309] Greatest English Letter in Upper and Lower Case
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const lowerCaseMap = new Array(26).fill(false);
  const upperCaseMap = new Array(26).fill(false);

  for (let i = 0; i < s.length; i++) {
    const letter = s[i].charCodeAt(0);
    upperCaseMap[letter - 65] = true;
    lowerCaseMap[letter - 97] = true;
  }

  let greatest = -Infinity;
  for (let i = 25; i >= 0; i--) {
    const upperCaseLetter = upperCaseMap[i];
    const lowerCaseLetter = lowerCaseMap[i];

    if (upperCaseLetter !== false && upperCaseLetter === lowerCaseLetter) {
      greatest = Math.max(i, greatest);
      break;
    }
  }
  return greatest !== -Infinity ? String.fromCharCode(greatest + 65) : "";
};
// @lc code=end
