/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// space O(n)
// runtime O(n+m)
var numJewelsInStones = function (jewels, stones) {
  const hashMap = new Map();
  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    if (hashMap.has(stone)) {
      hashMap.set(stone, hashMap.get(stone) + 1);
    } else {
      hashMap.set(stone, 1);
    }
  }
  let howManyAreJewels = 0;
  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i];
    howManyAreJewels += hashMap.get(jewel) ?? 0;
  }
  return howManyAreJewels;
};
// @lc code=end
