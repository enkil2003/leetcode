/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} needle
 * @param {string} haystack
 * @return {boolean}
 */
var checkInclusion = function (needle, haystack = []) {
  const isInSubString = (leftPointer, rightPointer, needle, haystack) => {
    while (leftPointer < rightPointer) {
      const currentLetter = haystack[leftPointer];
      if (needle === currentLetter) {
        return true;
      }
      leftPointer++;
    }
    return false;
  };

  if (needle.length > haystack.length) return false;

  // const hashMap = {};
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < haystack.length; rightPointer++) {
    let currentWindowLength = rightPointer - leftPointer + 1;
    let currentLetter = needle[leftPointer];

    // hashMap[currentLetter] = (hashMap[currentLetter] ?? 0) + 1;

    // si la vantana actual no incluye la letra
    // decrementamos la ventana desde la izquierda
    // y sacamos el caracter del hashmap
    if (
      !isInSubString(leftPointer, rightPointer + 1, currentLetter, haystack)
    ) {
      leftPointer++;
    }

    // recalculamos la ventana ?
    currentWindowLength = rightPointer - leftPointer + 1;

    // si mi ventana actual es igual de larga que mi s2
    // devuelvo verdadero
    if (currentWindowLength === needle.length) {
      return true;
    }
  }
  return false;
};
checkInclusion('ab', 'eidbaooo');
// @lc code=end
