/*
 * @lc app=leetcode id=946 lang=javascript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const pushStack = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    pushStack.push(pushed[i]);

    while (j < popped.length && pushStack[pushStack.length - 1] === popped[j]) {
      pushStack.pop();
      j++;
    }
  }
  return pushStack.length === 0;
};
//
//                      1  2  3  x  x
//                                             j
// validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]);
// @lc code=end
