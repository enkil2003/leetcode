/*
 * @lc app=leetcode id=2085 lang=javascript
 *
 * [2085] Count Common Words With One Occurrence
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const map1 = {};
  const map2 = {};
  const n = Math.max(words1.length, words2.length);

  for (let i = 0; i < n; i++) {
    const word1 = words1[i];
    const word2 = words2[i];
    if (word1) {
      map1[word1] = (map1[word1] ?? 0) + 1;
    }
    if (word2) {
      map2[word2] = (map2[word2] ?? 0) + 1;
    }
  }

  let count = 0;
  for (const word of words1) {
    if (map1[word] === 1 && map2[word] === 1) count++;
  }
  return count;
};
// countWords(
//   ["leetcode", "is", "amazing", "as", "is"],
//   ["amazing", "leetcode", "is"]
// );
// @lc code=end
