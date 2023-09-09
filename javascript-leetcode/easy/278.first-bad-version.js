/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 0;
    let r = n;
    let firstBadVersion = n;

    while (l <= r) {
      const index = Math.floor(l + (r - l) / 2);
      const isBad = isBadVersion(index);
      if (isBad) {
        r = index - 1;
        firstBadVersion = Math.min(firstBadVersion, index);
      } else {
        l = index + 1;
      }
    }
    return firstBadVersion;
  };
};
// @lc code=end
