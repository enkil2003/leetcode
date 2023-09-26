/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strings
 * @return {string}
 */
var longestCommonPrefix2 = function (strings) {
  // let minString = strings[0];
  // let shortestString = minString.length;
  // for (const string of strings) {
  //   const strLen = string.length;
  //   if (strLen < shortestString) {
  //     shortestString = strLen;
  //     minString = string;
  //   }
  // }
  strings.sort((a, b) => a.length - b.length);
  let minString = strings[0];
  let shortestString = minString.length;
  if (shortestString === 0) return '';
  let prefix = '';
  for (let i = 0; i < shortestString; i++) {
    let found = true;
    const letter = minString.charAt(i);
    for (const string of strings) {
      let targetLetter = string[i];
      if (letter !== targetLetter) {
        found = false;
        break;
      }
    }
    if (found) {
      prefix += letter;
    } else {
      break;
    }
  }
  return prefix;
};
longestCommonPrefix(['flower', 'flow', 'flight']);
// @lc code=end
