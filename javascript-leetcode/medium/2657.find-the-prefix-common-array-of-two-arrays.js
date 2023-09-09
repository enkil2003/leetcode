/*
 * @lc app=leetcode id=2657 lang=javascript
 *
 * [2657] Find the Prefix Common Array of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(A, B) {
  const length = A.length;
  const arrayA = [];
  const arrayB = [];

  for (let i = 0; i < length; ++i) {
    if (!arrayA[A[i]]) {
      arrayA[A[i]] = 1;
    } else {
      arrayA[A[i]]++;
    }

    if (!arrayA[B[i]]) {
      arrayA[B[i]] = -1;
    } else {
      arrayA[B[i]]--;
    }

    arrayB[i] = arrayA.filter((value) => value === 0).length;
  }
  return arrayB;
}
findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]);
// @lc code=end
