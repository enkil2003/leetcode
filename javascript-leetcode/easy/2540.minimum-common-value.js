/*
 * @lc app=leetcode id=2540 lang=javascript
 *
 * [2540] Minimum Common Value
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var getCommon = function (nums1, nums2) {
  for (let num of nums1) {
    if (search(nums2, num)) {
      return num;
    }
  }
  return -1;
};
function search(arr, val) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) return true;
    if (arr[mid] > val) right = mid - 1;
    if (arr[mid] < val) left = mid + 1;
  }
  return false;
}
// var getCommon = function (nums1, nums2) {
//   const bs = (target, arr) => {
//     let l = 0;
//     let r = arr.length - 1;

//     let res = Infinity;

//     while (l <= r) {
//       let mid = Math.floor(l + (r - l) / 2);
//       let curr = arr[mid];

//       if (curr === target) {
//         r--;
//         res = Math.min(res, curr);
//       } else if (curr < target) {
//         l = mid + 1;
//       } else {
//         r = mid - 1;
//       }
//     }

//     return res;
//   };

//   for (let i = 0; i < nums2.length; i++) {
//     const num = nums2[i];
//     const minimum = bs(num, nums1);
//     if (minimum !== Infinity) {
//       return minimum;
//     }
//   }

//   return -1;
// };
const r = getCommon([1, 2, 3, 6], [2, 3, 4, 5]);
r;
// [1,2,3],
// [2,4]
// @lc code=end
