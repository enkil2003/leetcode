/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar2 = function (s, c) {
  const ans = new Array(s.length).fill(Infinity);
  for (
    let leftIndex = 0,
      leftDistance = Infinity,
      rightIndex = s.length - 1,
      rightDistance = Infinity;
    leftIndex < s.length;
    leftIndex++, leftDistance++, rightIndex--, rightDistance++
  ) {
    if (s[leftIndex] === c) {
      leftDistance = 0;
    }
    ans[leftIndex] = Math.min(ans[leftIndex], leftDistance);

    if (s[rightIndex] === c) {
      rightDistance = 0;
    }
    ans[rightIndex] = Math.min(ans[rightIndex], rightDistance);
  }
  return ans;
};
var shortestToChar = function (s, c) {
  let ans = new Array(s.length).fill(Infinity);
  for (
    let leftIndex = 0,
      leftDistance = Infinity,
      rightIndex = s.length - 1,
      rightDistance = Infinity;
    leftIndex < s.length;
    leftIndex++, leftDistance++, rightIndex--, rightDistance++
  ) {
    if (s[leftIndex] === c) {
      leftDistance = 0;
    }

    ans[leftIndex] = Math.min(ans[leftIndex], leftDistance);

    if (s[rightIndex] === c) {
      rightDistance = 0;
    }

    ans[rightIndex] = Math.min(ans[rightIndex], rightDistance);
  }
  return ans;
};
// shortestToChar('loveleetcode', 'e');
// @lc code=end
