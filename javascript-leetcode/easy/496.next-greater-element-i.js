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
var nextGreaterElement = function (nums1, nums2) {
  const hashMap = new Map();
  const res = new Array(nums1.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    hashMap[num] = i;
  }

  for (let i = 0; i < nums2.length; i++) {
    const cur = nums2[i];
    while (stack.length && cur > stack[stack.length - 1]) {
      const val = stack.pop();
      const idx = hashMap[val];
      res[idx] = cur;
    }
    if (cur in hashMap) {
      stack.push(cur);
    }
  }

  return res;
};
nextGreaterElement([4, 1, 2], [1, 5, 2, 3, 4]);
// @lc code=end
