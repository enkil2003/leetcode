/*
 * @lc app=leetcode id=2000 lang=javascript
 *
 * [2000] Reverse Prefix of Word
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
// var reversePrefix1 = function (word, ch) {
//   let l = 0;
//   let r = word.indexOf(ch);
//   word = word.split("");
//   while (l < r) {
//     const tmp = word[r];
//     word[r] = word[l];
//     word[l] = tmp;
//     l++;
//     r--;
//   }
//   return word.join("");
// };
var reversePrefix = function (word, ch) {
  const pos = word.indexOf(ch) + 1;
  if (pos === -1) return word;
  word = word.split("");
  const res = word.splice(0, pos).reverse().join("") + word.join("");
  return res;
};
// reversePrefix("abcdefd", "d");
// @lc code=end
