/*
 * @lc app=leetcode id=2610 lang=javascript
 *
 * [2610] Convert an Array Into a 2D Array With Conditions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var findMatrix = function (nums) {
//   const answer = [[]];
//   while (nums.length) {
//     let num = nums.shift();
//     for (const [index, row] of answer.entries()) {
//       if (row.indexOf(num) === -1) {
//         row.push(num);
//         break;
//       }
//       if (index === answer.length - 1) {
//         answer.push([]);
//       }
//     }
//   }
//   return answer;
// };
var findMatrix = function (nums) {
  let output = [];
  let map = {};

  for (let num of nums) {
    let idx = map[num] || 0;
    let arr = output[idx] || [];

    arr.push(num);
    output[idx] = arr;
    map[num] = idx + 1;
  }

  return output;
};
findMatrix([1, 3, 4, 1, 2, 3, 1]);
// @lc code=end
