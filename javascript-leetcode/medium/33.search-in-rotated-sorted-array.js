/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    let num = nums[mid];

    if (num === target) {
      return mid;
    }

    if (num >= nums[l]) {
      // || target < nums[l]
      // necesito esto para el caso como
      // target 0
      //  l           r
      // [4,5,6,7,0,1,2]
      //        m
      if (target > num || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (target < num || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
};
search([4, 5, 6, 7, 0, 1, 2], 0);
// @lc code=end
