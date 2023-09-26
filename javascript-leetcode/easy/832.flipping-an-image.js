/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let row of image) {
    for (let i = 0; i < row.length / 2; i++) {
      let j = row.length - i - 1;
      let tmp = row[i];
      row[i] = row[j];
      row[j] = tmp;
    }
    for (let i = 0; i < row.length; i++) {
      row[i] = row[i] ? 0 : 1;
    }
  }
  return image;
};

// @lc code=end
