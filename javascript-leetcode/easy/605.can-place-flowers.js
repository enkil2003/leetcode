/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed.unshift(0);
  flowerbed.push(0);
  for (let i = 1; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};
// canPlaceFlowers([0, 1, 0], 1);
// @lc code=end
