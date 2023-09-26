/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */
// strStr("mississippi", "issip");
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let j = 0;
  let firstLetterReoccurrence = null;
  for (let i = 0; i < haystack.length; i++) {
    let haystackLetter = haystack[i];
    let needleLetter = needle[j];
    if (haystackLetter === needleLetter) {
      if (
        j > 0 &&
        firstLetterReoccurrence === null &&
        haystackLetter === needle[0]
      ) {
        firstLetterReoccurrence = i - 1;
      }
      j++;
      if (j === needle.length) {
        return i - (needle.length - 1);
      }
    } else {
      j = 0;
      if (firstLetterReoccurrence) {
        i = firstLetterReoccurrence;
        firstLetterReoccurrence = null;
      } else {
        i--;
      }
    }
  }
  return -1;
};
// strStr("mississippi", "pi");
// @lc code=end
