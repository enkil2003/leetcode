/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   const hashMap = {};
//   for (const str of strs) {
//     let key = str
//       .split("")
//       .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
//       .join("");
//     if (hashMap[key]) hashMap[key].push(str);
//     else hashMap[key] = [str];
//   }
//   return Object.values(hashMap);
// };

const groupAnagrams = (strings) => {
  const hashMap = {};
  for (const s of strings) {
    const count = new Array(26).fill(0);
    for (const c of s) {
      charIndex = c.charCodeAt(0) - 97;
      count[charIndex] += 1;
    }
    if (hashMap[count]) {
      hashMap[count].push(s);
    } else {
      hashMap[count] = [s];
    }
  }

  return Object.values(hashMap);
};
// const r = groupAnagrams(["eat", "ate", "bat"]);
// r;
// res[];
// hashMap
// @lc code=end
