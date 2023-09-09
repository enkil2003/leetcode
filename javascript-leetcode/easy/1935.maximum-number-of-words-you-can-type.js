/*
 * @lc app=leetcode id=1935 lang=javascript
 *
 * [1935] Maximum Number of Words You Can Type
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const words = text.split(" ");
  let safeWords = words.length;
  for (let word of words) {
    for (let brokenLetter of brokenLetters) {
      if (word.indexOf(brokenLetter) !== -1) {
        safeWords--;
        break;
      }
    }
  }
  return safeWords;
};
//   const hashMap = new Array(26).fill(true);
//   for (let letter of brokenLetters) {
//     hashMap[letter.charCodeAt(0) - 97] = false;
//   }
//   const words = text.split(" ");
//   let safeWords = words.length;
//   for (let word of words) {
//     for (let letter of word) {
//       // if is broken,
//       // reduce count
//       // and continue to next word
//       if () {
//       }
//     }
//   }
// };
// @lc code=end
