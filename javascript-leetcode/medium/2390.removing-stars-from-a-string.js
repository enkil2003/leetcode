/*
 * @lc app=leetcode id=2390 lang=javascript
 *
 * [2390] Removing Stars From a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let ans = [];
  for (let l = 0; l < s.length; l++) {
    const char = s[l];
    ans.push(char);
    if (char === '*') {
      ans.pop();
      ans.pop();
    }
  }
  return ans.join('');
};
// removeStars('erase*****');
// @lc code=end
