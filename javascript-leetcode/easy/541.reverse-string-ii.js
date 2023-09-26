/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split('');
  const swap = (i, j, arr) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  for (let start = 0; start < s.length; start += 2 * k) {
    let i = start;
    let j =
  }
  return s.join('');
};
// reverseStr('abcd', 2);
// @lc code=end
