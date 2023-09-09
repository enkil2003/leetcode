/*
 * @lc app=leetcode id=2570 lang=javascript
 *
 * [2570] Merge Two 2D Arrays by Summing Values
 */

// @lc code=start
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const hashMap = new Map();
  const n = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < n; i++) {
    if (nums1[i])
      hashMap.set(nums1[i][0], (hashMap.get(nums1[i][0]) ?? 0) + nums1[i][1]);
    if (nums2[i])
      hashMap.set(nums2[i][0], (hashMap.get(nums2[i][0]) ?? 0) + nums2[i][1]);
  }
  return Array.from(hashMap).sort((a, b) => a[0] - b[0]);
};
// @lc code=end
