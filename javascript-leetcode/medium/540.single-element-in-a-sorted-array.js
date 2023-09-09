/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  l
//                  r
// [1,1,2,3,3,4,4,8,8]
//          m
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  if (r === 0 || nums[0] !== nums[1]) {
    return nums[0];
  } else if (nums[r] !== nums[r - 1]) {
    return nums[r];
  }

  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    let curr = nums[m];
    let next = nums[m + 1];
    let prev = nums[m - 1];
    let isIndexEven = m % 2 === 0;

    if (curr !== prev && curr !== next) {
      return curr;
    }
    if ((isIndexEven && curr === next) || (!isIndexEven && curr === prev)) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
};
// @lc code=end
