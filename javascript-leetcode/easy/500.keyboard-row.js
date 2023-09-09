/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");
  const res = [];

  const isWordInRow = (word) => {
    let canBeWrittenInRow1 = true;
    let canBeWrittenInRow2 = true;
    let canBeWrittenInRow3 = true;

    for (const letter of word) {
      if (canBeWrittenInRow1 && !row1.has(letter)) {
        canBeWrittenInRow1 = false;
      }
      if (canBeWrittenInRow2 && !row2.has(letter)) {
        canBeWrittenInRow2 = false;
      }
      if (canBeWrittenInRow3 && !row3.has(letter)) {
        canBeWrittenInRow3 = false;
      }
      if (!canBeWrittenInRow1 && !canBeWrittenInRow2 && !canBeWrittenInRow3) {
        break;
      }
    }
    return canBeWrittenInRow1 || canBeWrittenInRow2 || canBeWrittenInRow3;
  };

  for (let i = 0; i < words.length; i++) {
    const word = new Set(words[i].toLowerCase());
    if (isWordInRow(word)) {
      res.push(words[i]);
    }
  }
  return res;
};
// @lc code=end
