/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const stack = [];
  for (let operation of operations) {
    switch (operation) {
      case 'C':
        stack.pop();
        lastNumber = stack[stack.length - 1];
        break;
      case 'D':
        stack.push(stack[stack.length - 1] * 2);
        break;
      case '+':
        stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
        break;
      default:
        stack.push(+operation);
    }
  }
  return stack.reduce((acc, item) => acc + item, 0);
};
// calPoints(['5', '2', 'C', 'D', '+']);
// @lc code=end
