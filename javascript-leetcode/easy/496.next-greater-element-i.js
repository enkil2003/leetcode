/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
1: 0
3: 1
4: 2
2: 3
*/
// var nextGreaterElement2 = function (nums1, nums2) {
//   const hashMap = new Map();
//   const res = new Array(nums1.length).fill(-1);
//   const stack = [];
//   for (let i = 0; i < nums1.length; i++) {
//     const num = nums1[i];
//     hashMap[num] = i;
//   }

//   for (let i = 0; i < nums2.length; i++) {
//     const cur = nums2[i];
//     while (stack.length && cur > stack[stack.length - 1]) {
//       const val = stack.pop();
//       const idx = hashMap[val];
//       res[idx] = cur;
//     }
//     if (cur in hashMap) {
//       stack.push(cur);
//     }
//   }

//   return res;
// };
var nextGreaterElement = function (nums1, nums2) {
  let hashMap = {};
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i];
    hashMap[num] = i;
  }

  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    nums1[i] = -1;
    for (let j = hashMap[num]; j < nums2.length; j++) {
      let jNum = nums2[j];
      if (jNum > num) {
        nums1[i] = jNum;
        break;
      }
    }
  }
  return nums1;
};

// nextGreaterElement([2, 4], [1, 2, 3, 4]);
// @lc code=end
