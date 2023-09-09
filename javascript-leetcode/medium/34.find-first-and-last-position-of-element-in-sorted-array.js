/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//   const bs = (bias) => {
//     let l = 0;
//     let r = nums.length - 1;
//     let position = -1;

//     while (l <= r) {
//       let m = (r + l) >> 1;
//       let c = nums[m];

//       if (c === target) {
//         position = m;
//         if (bias) {
//           l++;
//         } else {
//           r--;
//         }
//       } else if (c < target) {
//         l = m + 1;
//       } else {
//         r = m - 1;
//       }
//     }
//     return position;
//   };
//   return [bs(), bs(true)];
// };
var searchRange = function (nums, target) {
  const bs = (leftBias) => {
    let l = 0;
    let r = nums.length;
    let index = -1;

    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      let curr = nums[mid];

      if (curr === target) {
        index = mid;
        if (leftBias) {
          l++;
        } else {
          r--;
        }
      } else if (curr < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return index;
  };

  return [bs(), bs(true)];
};
// @lc code=end
