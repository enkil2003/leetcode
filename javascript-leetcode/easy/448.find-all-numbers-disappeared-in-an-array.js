/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   const hashSet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     hashSet.add(num);
//   }
//   const missing = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!hashSet.has(i)) {
//       missing.push(i);
//     }
//   }
//   return missing;
// };
var findDisappearedNumbers = function (nums) {
  for (let n of nums) {
    // como los valores son incrementales
    // comenzando por 1 hasta n, pero puede
    // haber faltantes
    let i = Math.abs(n) - 1;
    // ^^^^ nota el motivo por el cual usamos Math.abs
    // es porque podemos llegar a pasar dos veces por el
    // mismo valor, el cual ya convertimos en NEGATIVO
    nums[i] = -1 * Math.abs(nums[i]);
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
// @lc code=end
