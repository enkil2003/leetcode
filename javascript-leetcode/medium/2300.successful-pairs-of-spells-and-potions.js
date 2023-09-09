/*
 * @lc app=leetcode id=2300 lang=javascript
 *
 * [2300] Successful Pairs of Spells and Potions
 */

// @lc code=start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  for (const [index, spell] of spells.entries()) {
    let l = 0;
    let r = potions.length - 1;

    while (l <= r) {
      const mid = Math.floor(l + (r - l) / 2);
      const potion = potions[mid];
      const isSuccess = potion * spell >= success;

      if (isSuccess) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    spells[index] = potions.length - l;
  }
  return spells;
};
// @lc code=end
