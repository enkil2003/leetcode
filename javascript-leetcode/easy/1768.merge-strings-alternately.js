/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// var mergeAlternately2 = function (word1, word2) {
//   let answer = "";
//   let i = 0;
//   let l1 = word1.length;
//   let l2 = word2.length;
//   while (i !== l1 && i !== l2) {
//     let letter1 = word1[i];
//     let letter2 = word2[i];
//     answer += letter1 + letter2;
//     i++;
//   }
//   if (i < word1.length) {
//     answer += word1.substring(i);
//   } else if (i < word2.length) {
//     answer += word2.substring(i);
//   }
//   return answer;
// };

var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;
  while (i !== word1.length && i !== word2.length) {
    res += word1[i] + word2[i];
    i++;
  }
  if (i === word2.length) {
    res += word1.substring(i);
  } else {
    res += word2.substring(i);
  }
  return res;
};
// mergeAlternately("abcefg", "pqr");
// @lc code=end
