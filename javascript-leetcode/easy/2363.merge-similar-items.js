/*
 * @lc app=leetcode id=2363 lang=javascript
 *
 * [2363] Merge Similar Items
 */

// @lc code=start
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let n = Math.max(items1.length, items2.length) - 1;
  const itemsMap = new Map();
  for (let i = 0; i <= n; i++) {
    let itemKey = null;
    let itemValue = null;
    if (items1[i]) {
      [itemKey, itemValue] = items1[i];
      itemsMap.set(itemKey, (itemsMap.get(itemKey) ?? 0) + itemValue);
    }
    if (items2[i]) {
      [itemKey, itemValue] = items2[i];
      itemsMap.set(itemKey, (itemsMap.get(itemKey) ?? 0) + itemValue);
    }
  }
  const res = Array.from(itemsMap.entries()).sort((a, b) => a[0] - b[0]);
  return res;
};
// @lc code=end
