/*
 * @lc app=leetcode id=2149 lang=javascript
 *
 * [2149] Rearrange Array Elements by Sign
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray2 = function (nums) {
  const positive = [];
  const negative = [];

  for (let num of nums) {
    if (num < 0) {
      negative.push(num);
    } else {
      positive.push(num);
    }
  }

  const ans = [];
  for (let i = 0; i < positive.length; i++) {
    const pos = positive[i];
    const neg = negative[i];

    ans.push(pos);
    ans.push(neg);
  }
  return ans;
};

var rearrangeArray3 = function (nums) {
  const ans = new Array(nums.length);

  let posIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      ans[posIndex] = num;
      posIndex += 2;
    }
  }
  let negIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      ans[negIndex] = num;
      negIndex += 2;
    }
  }
  return ans;
};

var rearrangeArray = function (nums) {
  const ans = new Array(nums.length);

  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      ans[posIndex] = num;
      posIndex += 2;
    } else {
      ans[negIndex] = num;
      negIndex += 2;
    }
  }
  return ans;
};

// rearrangeArray([3, 1, -2, -5, 2, -4]);
// @lc code=end
