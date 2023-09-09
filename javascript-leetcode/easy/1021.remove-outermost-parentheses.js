/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack = [];
  let pivot = 0;
  let res = "";
  let j = 1;
  for (let i = 0; i < s.length; i++) {
    const par = s[i];
    if (par === "(") {
      stack.push("(");
    } else {
      stack.pop();
    }
    if (stack.length === 0) {
      pivot = i;
      res += s.slice(j, i);
      j = i + 2;
    }
  }
  return res;
};
// @lc code=end
