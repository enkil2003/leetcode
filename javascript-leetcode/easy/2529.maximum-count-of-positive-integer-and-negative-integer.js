/*
 * @lc app=leetcode id=2529 lang=javascript
 *
 * [2529] Maximum Count of Positive Integer and Negative Integer
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount2 = function (nums) {
  // i need to know where the first negative element is in the array
  let firstNegativeNumber = -Infinity;
  let firstPositiveNumber = Infinity;
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const curr = nums[mid];
    const isNegative = curr < 0;

    if (isNegative) {
      firstNegativeNumber = Math.max(firstNegativeNumber, mid);
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const curr = nums[mid];
    const isPositive = curr > 0;

    if (isPositive) {
      firstPositiveNumber = Math.min(firstPositiveNumber, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  if (firstNegativeNumber === -Infinity && firstPositiveNumber === Infinity) {
    return 0;
  }

  const res = Math.max(
    firstNegativeNumber + 1,
    nums.length - firstPositiveNumber
  );
  return res;
};

// O(logN)
var maximumCount = function (nums) {
  const bs = (low, high, lowerBound) => {
    while (low < high) {
      const index = Math.floor(low + (high - low) / 2);
      const currentNumber = nums[index];

      if (lowerBound) {
        if (currentNumber >= 0) {
          high--;
        } else {
          low++;
        }
      } else {
        if (currentNumber <= 0) {
          low++;
        } else {
          high--;
        }
      }
    }
    return lowerBound ? low : high;
  };

  const firstNegativeIndex = bs(0, nums.length, true);
  const firstPositiveIndex = bs(firstNegativeIndex, nums.length);

  return Math.max(nums.length - firstPositiveIndex, firstNegativeIndex);
};

// maximumCount([-2, -1, -1, 1, 2, 3]);
// @lc code=end
