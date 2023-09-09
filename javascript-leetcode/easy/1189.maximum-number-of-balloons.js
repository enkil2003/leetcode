/*
 * @lc app=leetcode id=1189 lang=javascript
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const hashMap = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };
  for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    if (!(character in hashMap)) continue;
    hashMap[character] = (hashMap[character] ?? 0) + 1;
  }
  hashMap["l"] = Math.floor((hashMap["l"] /= 2));
  hashMap["o"] = Math.floor((hashMap["o"] /= 2));
  let ans = Infinity;
  for (const [key, value] of Object.entries(hashMap)) {
    ans = Math.min(ans, value);
  }
  return ans;
};
// @lc code=end
