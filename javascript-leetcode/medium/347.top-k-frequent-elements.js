/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   const hashMap = {};
//   const freq = [];

//   for (let i = 0; i < nums.length; i++) {
//     hashMap[nums[i]] =
//       hashMap[nums[i]] !== undefined ? hashMap[nums[i]] + 1 : 1;
//     freq.push([]);
//   }

//   for (let [number, count] of Object.entries(hashMap)) {
//     freq[count - 1].push(number);
//   }

//   const res = [];
//   for (let i = freq.length - 1; i >= 0; i--) {
//     for (let j = 0; j < freq[i].length; j++) {
//       const count = +freq[i][j];
//       res.push(count);
//       if (res.length === k) {
//         return res;
//       }
//     }
//   }
// };

var topKFrequent2 = function (nums, k) {
  const hashMap = {};
  const freq = [];

  // construyo el hashMap
  // donde los indices son los numeros que entran
  // {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  // }
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] ?? 0) + 1;
    // creo un array en cada indice de frequencia
    // para luego guardar que numeros tienen esa frequencia
    freq[i] = [];
  }

  for (const [number, occurrences] of Object.entries(hashMap)) {
    // - 1 para acomodar la base 0 del array
    freq[occurrences - 1].push(number);
  }

  const res = [];
  // hago el bucle de atras para adelante
  // ya que los indices marcan la frequencia
  // mas alta.
  for (let i = freq.length - 1; i >= 0; i--) {
    // tomo de la frequencia el primer grupo
    // e itero agregando al resultado
    for (let j = 0; j < freq[i].length; j++) {
      res.push(+freq[i][j]);
      if (res.length === k) {
        return res;
      }
    }
  }
};

var topKFrequent = function (nums, k) {
  const hashMap = {};
  const freq = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    hashMap = (hashMap[num] ?? 0) + 1;
    freq[i] = [];
  }

  for (let [number, occurrence] of Object.entries(hashMap)) {
    freq[occurrence - 1].push(number);
  }
};
// @lc code=end
