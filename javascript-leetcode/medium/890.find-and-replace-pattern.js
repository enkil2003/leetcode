/*
 * @lc app=leetcode id=890 lang=javascript
 *
 * [890] Find and Replace Pattern
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const match = (word, pattern) => {
  const charToWord = {};
  const wordToChar = {};

  // O(k)
  for (let i = 0; i < word.length; i++) {
    let wordChar = word[i];
    let patternChar = pattern[i];
    if (!charToWord[wordChar]) {
      charToWord[wordChar] = patternChar;
    }
    if (!wordToChar[patternChar]) {
      wordToChar[patternChar] = wordChar;
    }
    if (
      charToWord[wordChar] !== patternChar ||
      wordToChar[patternChar] !== wordChar
    ) {
      return false;
    }
  }
  return true;
};

var findAndReplacePattern = function (words, pattern) {
  const answer = [];
  // O(n)
  for (let word of words) {
    if (match(word, pattern)) {
      answer.push(word);
    }
  }
  return answer;
};
// findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb");
// @lc code=end
