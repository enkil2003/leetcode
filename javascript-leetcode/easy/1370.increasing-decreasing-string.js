/*
 * @lc app=leetcode id=1370 lang=javascript
 *
 * [1370] Increasing Decreasing String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let res = "";
  let count = s.length;
  const freq = new Array(26).fill(0);

  for (let i = 0; i < count; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  while (count > 0) {
    for (let i = 0; i < freq.length; i++) {
      if (freq[i] !== 0) {
        res += String.fromCharCode(i + 97);
        freq[i]--;
        count--;
      }
    }
    for (let i = freq.length - 1; i >= 0; i--) {
      if (freq[i] !== 0) {
        res += String.fromCharCode(i + 97);
        freq[i]--;
        count--;
      }
    }
  }
  return res;
};
// sortString("aaaabbbbcccc");
// @lc code=end
