/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // s = s.trim();
  if (s.length === 0) return 0;

  let count = 0;
  let firstLetterFound = false;
  for (let i = s.length - 1; i >= 0; i--) {
    const letter = s.charAt(i);
    if (letter !== " " && !firstLetterFound) {
      firstLetterFound = true;
    }

    if (firstLetterFound) {
      if (firstLetterFound && letter !== " ") {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};
// @lc code=end
