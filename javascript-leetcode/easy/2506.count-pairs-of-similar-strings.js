/*
 * @lc app=leetcode id=2506 lang=javascript
 *
 * [2506] Count Pairs Of Similar Strings
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let word1 = [...new Set(words[i].split("").sort())].join("");
    for (let j = i + 1; j < words.length; j++) {
      const word2 = [...new Set(words[j].split("").sort())].join("");
      if (word1 === word2) {
        count++;
      }
    }
  }
  return count;
};
similarPairs(["aabb", "ab", "ba"]);
// @lc code=end
