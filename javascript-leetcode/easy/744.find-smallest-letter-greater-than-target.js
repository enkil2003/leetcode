/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let l = 0;
  let r = letters.length - 1;
  let targetCharCode = target.charCodeAt(0);
  let tailCharCode = letters[letters.length - 1].charCodeAt(0);

  if (targetCharCode >= tailCharCode) {
    return letters[0];
  }
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    let currLetter = letters[mid];
    let currCharCode = currLetter.charCodeAt(0);

    // is exactly one character bigger
    if (currCharCode === targetCharCode + 1) {
      return currLetter;
    }

    // use <= because we dont want the exact character
    if (currCharCode <= targetCharCode) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return letters[l];
};
// @lc code=end
