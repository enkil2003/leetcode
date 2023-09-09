/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) {
      return true;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }

  return false;
};

var missingNumber = function (nums) {
  const len = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i <= len; i++) {
    if (!binarySearch(nums, i)) {
      return i;
    }
  }
};
missingNumber([0, 1]);
// @lc code=end
