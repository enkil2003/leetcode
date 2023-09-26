/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let r1 = m - 1;
  let r2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (r1 >= 0 && r2 >= 0) {
      nums1[i] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--];
    } else if (r1 >= 0) {
      nums1[i] = nums1[r1--];
    } else {
      nums1[i] = nums2[r2--];
    }
  }
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// @lc code=end
