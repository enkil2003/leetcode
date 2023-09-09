/*
 * @lc app=leetcode id=2215 lang=javascript
 *
 * [2215] Find the Difference of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const ans = [[], []];

  for (let num of [...set1, ...set2]) {
    if (!set1.has(num)) {
      ans[1].push(num);
    }
    if (!set2.has(num)) {
      ans[0].push(num);
    }
  }
  return ans;
};
// findDifference([1, 2, 3], [2, 4, 6]);
// @lc code=end
