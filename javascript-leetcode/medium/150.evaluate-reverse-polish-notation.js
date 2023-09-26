/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (operations[token]) {
      let top = stack.pop();
      let second = stack.pop();
      stack.push(operations[token](second, top));
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
// evalRPN(['0', '3', '/']);
// @lc code=end
