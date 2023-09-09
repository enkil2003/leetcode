/*
 * @lc app=leetcode id=2032 lang=javascript
 *
 * [2032] Two Out of Three
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  let res = new Set();
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  for (let i of [...nums1, ...nums2, ...nums3]) {
    let occurrences = 0;
    if (set1.has(i)) {
      occurrences++;
    }
    if (set2.has(i)) {
      occurrences++;
    }
    if (set3.has(i)) {
      occurrences++;
    }
    if (occurrences > 1) {
      res.add(i);
    }
  }
  return [...res];
};
// twoOutOfThree([1, 1, 3, 2], [2, 3], [3]);
// @lc code=end
