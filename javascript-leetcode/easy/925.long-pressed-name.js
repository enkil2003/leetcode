/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let j = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[j]) {
      j++;
    } else if (typed[i] === name[j - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return j === name.length;
};
// isLongPressedName('pyplrz', 'ppyypllr');
// @lc code=end
