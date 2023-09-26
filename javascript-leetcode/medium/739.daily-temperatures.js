/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let length = temperatures.length;
  for (let i = 0, j = 1; i < length; i++, j++) {
    const today = temperatures[i];
    let tomorrow = temperatures[j];

    if (today < tomorrow) {
      stack.push(1);
    } else {
      let k = i + 1;
      while (k < length) {
        let nextTemp = temperatures[k];
        if (nextTemp < today) {
          k++;
        } else {
          // wait period
          stack.push(k - i);
          break;
        }
      }
    }
  }

  // fill up remaining days with 0 if any
  for (let i = stack.length; i < temperatures.length; i++) {
    stack.push(0);
  }

  return stack;
};
// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// @lc code=end
