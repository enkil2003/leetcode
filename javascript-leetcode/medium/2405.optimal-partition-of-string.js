/*
 * @lc app=leetcode id=2405 lang=javascript
 *
 * [2405] Optimal Partition of String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// function partitionString(s) {
//   if (s.length === 0) return 0;
//   const arr = [];
//   let count = 1;

//   for (let i = 0; i < s.length; i++) {
//     const letter = s[i];
//     if (!arr.includes(letter)) {
//       arr.push(letter);
//     } else {
//       count++;
//       arr.length = 0;
//       arr.push(letter);
//     }
//   }

//   return count;
// }
// function partitionString(s) {
//   const lastSeen = [];
//   let count = 1;
//   let substringStarting = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (lastSeen[s.charCodeAt(i) - "a".charCodeAt(0)] >= substringStarting) {
//       count++;
//       substringStarting = i;
//     }
//     lastSeen[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
//   }

//   return count;
// }
function partitionString(s) {
  const arr = new Set();
  let count = 1;
  for (const letter of s) {
    if (arr.has(letter)) {
      count++;
      arr.clear();
    }
    arr.add(letter);
  }
  return count;
}
// @lc code=end
