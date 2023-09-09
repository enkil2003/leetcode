/*
 * @lc app=leetcode id=1614 lang=javascript
 *
 * [1614] Maximum Nesting Depth of the Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  if (s.length === 0 || (s.length === 1 && s !== "(" && s !== ")")) {
    return 0;
  }

  s = s.split("");
  const stack = [];
  let maxLength = 0;
  while (s.length) {
    const char = s.pop();
    if (char === "(") {
      stack.push("(");
    } else if (char === ")") {
      stack.pop();
    }
    maxLength = Math.max(maxLength, stack.length);
  }
  return maxLength;
};
// maxDepth("(1)+((2))+(((3)))");
// @lc code=end
