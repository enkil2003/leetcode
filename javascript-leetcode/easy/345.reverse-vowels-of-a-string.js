/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");

  const vowels = new Set();
  vowels.add("a");
  vowels.add("e");
  vowels.add("i");
  vowels.add("o");
  vowels.add("u");
  vowels.add("A");
  vowels.add("E");
  vowels.add("I");
  vowels.add("O");
  vowels.add("U");

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let leftVowel = null;
    let rightVowel = null;
    for (let i = l; i < r; i++) {
      const letter = s[i];
      if (vowels.has(letter)) {
        leftVowel = letter;
        l = i;
        break;
      }
    }
    for (let i = r; i > l; i--) {
      const letter = s[i];
      if (vowels.has(letter)) {
        rightVowel = letter;
        r = i;
        break;
      }
    }
    if (leftVowel && rightVowel) {
      s[l] = rightVowel;
      s[r] = leftVowel;
    }
    l++;
    r--;
  }
  return s.join("");
};
// reverseVowels("leetcode");
// @lc code=end
