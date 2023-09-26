/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let ans = [];
  let decrements = s.length;
  let increments = 0;
  for (let i = 0; i <= s.length; i++) {
    const operation = s[i];
    if (operation === "I") {
      ans.push(increments);
      increments++;
    } else {
      ans.push(decrements);
      decrements--;
    }
  }
  return ans;
};
// @lc code=end
