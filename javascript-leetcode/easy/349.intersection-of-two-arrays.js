/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection2 = function (nums1, nums2) {
  const isIntersection = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] == target) {
        return true;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return false;
  };
  if (nums1.length > nums2.length) {
    const tmp = [...nums2];
    nums2 = [...nums1];
    nums1 = [...tmp];
  }
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  const answer = [];
  let lastNum = null;
  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] !== lastNum && isIntersection(nums1, nums2[i])) {
      answer.push(nums2[i]);
    }
    lastNum = nums2[i];
  }
  return answer;
};

var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  const res = new Set();

  const bs = (array, target) => {
    let l = 0;
    let r = array.length - 1;

    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      let curr = array[mid];
      if (curr === target) {
        return true;
      }
      if (curr < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return false;
  };

  for (const num of nums2) {
    const r = bs(nums1, num);
    if (r) res.add(num);
  }

  return [...res];
};
// intersection([8, 0, 3], [0, 0]);
// @lc code=end
