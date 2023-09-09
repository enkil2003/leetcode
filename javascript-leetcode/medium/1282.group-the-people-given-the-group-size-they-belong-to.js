/*
 * @lc app=leetcode id=1282 lang=javascript
 *
 * [1282] Group the People Given the Group Size They Belong To
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
// var groupThePeople = function (groupSizes) {
//   const hashMap = {};
//   for (let i = 0; i < groupSizes.length; i++) {
//     const groupSize = groupSizes[i];
//     if (!hashMap[groupSize]) {
//       hashMap[groupSize] = [[]];
//     }
//     const lastGroupSizeLength =
//       hashMap[groupSize][hashMap[groupSize].length - 1].length;
//     if (lastGroupSizeLength >= groupSize) {
//       hashMap[groupSize].push([i]);
//     } else {
//       hashMap[groupSize][hashMap[groupSize].length - 1].push(i);
//     }
//   }
//   const answer = [];
//   for (const items of Object.values(hashMap)) {
//     while (items.length) {
//       let group = items.pop();
//       answer.push(group);
//     }
//   }
//   return answer;
// };
var groupThePeople = function (groupSizes) {
  const hashMap = {};
  const answer = [];
  for (let i = 0; i < groupSizes.length; i++) {
    const groupSize = groupSizes[i];
    if (!hashMap[groupSize]) {
      hashMap[groupSize] = [];
    }
    hashMap[groupSize].push([i]);
    if (hashMap[groupSize].length === groupSize) {
      answer.push([...hashMap[groupSize]]);
      hashMap[groupSize] = [];
    }
  }
  return answer;
};
// groupThePeople([3, 3, 3, 3, 3, 1, 3]);
// @lc code=end
