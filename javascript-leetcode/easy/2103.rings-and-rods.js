/*
 * @lc app=leetcode id=2103 lang=javascript
 *
 * [2103] Rings and Rods
 */

// @lc code=start
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const hashMap = {};

  let count = 0;
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = rings[i + 1];

    if (!hashMap[rod]) {
      hashMap[rod] = new Set();
    }
    hashMap[rod].add(color);
  }
  for (let [key, value] of Object.entries(hashMap)) {
    if (value.size === 3) count++;
  }
  return count;
};
// countPoints("B0R0G0R9R0B0G0");
// @lc code=end
