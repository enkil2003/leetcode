/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern2(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const w = words[i];

    if (charToWord.has(c) && charToWord.get(c) !== w) {
      return false;
    }

    if (wordToChar.has(w) && wordToChar.get(w) !== c) {
      return false;
    }

    charToWord.set(c, w);
    wordToChar.set(w, c);
  }

  return true;
}

function wordPattern(pattern, s) {
  let words = s.split(' ');
  if (pattern.length !== words.length) return false;

  let wordToChar = new Map();
  let charToWord = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const w = words[i];

    if (wordToChar.has(w) && wordToChar.get(w) !== c) {
      return false;
    }
    if (charToWord.has(c) && charToWord.get(c) !== w) {
      return false;
    }
    // wordToChar[w] = c;
    // charToWord[c] = w;
    wordToChar.set(w, c);
    charToWord.set(c, w);
  }
  return true;

  // let set1 = new Set(pattern.split(''));
  // let set2 = new Set(s.split(' '));
}
wordPattern('abba', 'dog cat cat dog');
// @lc code=end
