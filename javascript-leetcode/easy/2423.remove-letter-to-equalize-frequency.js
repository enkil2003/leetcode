/*
 * @lc app=leetcode id=2423 lang=javascript
 *
 * [2423] Remove Letter To Equalize Frequency
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const hashMap = {};
  for (let letter of word) {
    hashMap[letter] = (hashMap[letter] ?? 0) + 1;
  }
  let previousFreq = hashMap[word.charAt(0)];
  let entries = Object.entries(hashMap);
  let hasRemovedAChar = false;
  while (entries.length) {
    let [key, frequency] = entries.shift();
    if (previousFreq !== frequency && previousFreq !== frequency - 1) {
      return false;
    }
  }
  return true;
};
equalFrequency("aazz");
// @lc code=end
