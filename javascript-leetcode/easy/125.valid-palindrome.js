/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
//   let sanitizedString = s
//     .toLowerCase()
//     .split("")
//     .filter((letter) => {
//       if (letter === " ") return false;
//       const r =
//         (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ||
//         (letter >= 0 && letter <= 9);
//       return r;
//     })
//     .join("");
//   let l = 0;
//   let r = sanitizedString.length - 1;
//   while (l < r) {
//     if (sanitizedString[l] !== sanitizedString[r]) {
//       return false;
//     }
//     l++;
//     r--;
//   }
//   return true;
// };
var isPalindrome = function (s) {
  const validSymbols = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };
  s = s.toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let leftLetter = s[l];
    let rightLetter = s[r];

    if (!validSymbols[leftLetter]) {
      l++;
      continue;
    }
    if (!validSymbols[rightLetter]) {
      r--;
      continue;
    }
    if (leftLetter !== rightLetter) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
// @lc code=end
