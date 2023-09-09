/*
 * @lc app=leetcode id=2351 lang=javascript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const lettersSet = new Set();
  for (let i = 0; i < s.length; i++) {
    const letter = s.charAt(i);
    if (lettersSet.has(letter)) {
      return letter;
    }
    lettersSet.add(letter);
  }
};
// @lc code=end
