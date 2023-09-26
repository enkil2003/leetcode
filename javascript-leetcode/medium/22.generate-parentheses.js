/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  let res = [];

  const backtrack = (open = 0, close = 0) => {
    if (open === close && open === n) {
      res.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('(');
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(')');
      backtrack(open, close + 1);
      stack.pop();
    }
  };

  backtrack();
  return res;
};
// @lc code=end
