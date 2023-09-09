/*
 * @lc app=leetcode id=2389 lang=javascript
 *
 * [2389] Longest Subsequence With Limited Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
// var answerQueries = function (nums, queries) {
//   let result = [];
//   // O(n)
//   nums.sort((a, b) => a - b);

//   // empezamos desde i=1 por que no
//   // hay nada que sumar antes de i=0
//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = nums[i - 1] + nums[i];
//   }

//   // O(log(n))
//   const binarySearch = (target) => {
//     let left = 0;
//     let right = nums.length - 1;
//     // * 1
//     // por el mismo motivo que voy a tener que devolver
//     // un mid + 1 es que hago
//     // left < right y no  left <= right
//     while (left < right) {
//       let middleIdx = Math.floor((left + right) / 2);
//       // si encontre el elemento lo devuelvo
//       if (nums[middleIdx] === target) {
//         // aumentamos el indice porque es base cero
//         //  0 1 2
//         // [1,2,3]
//         // pero la pregunta es cuan grande es la ventana
//         // y si mi target fue === 0, eso quiere decir
//         // que es 1 elemento * 1
//         return middleIdx + 1;
//       }

//       if (nums[middleIdx] < target) {
//         left = middleIdx + 1;
//       } else {
//         right = middleIdx - 1;
//       }
//     }

//     return nums[left] > target ? left : left + 1;
//   };

//   // O(m)
//   for (let j = 0; j < queries.length; j++) {
//     let idx = binarySearch(queries[j]);
//     result.push(idx);
//   }

//   return result;
// };

// O(n+log(n)+m)
// [2,3,4]

// var answerQueries2 = function (nums, queries) {
//   nums.sort((a, b) => a - b);

//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = nums[i] + nums[i - 1];
//   }

//   const bs = (target) => {
//     let l = 0;
//     let r = nums.length - 1;

//     while (l < r) {
//       let mid = Math.floor(l + (r - l) / 2);
//       let curr = nums[mid];

//       if (curr === target) {
//         return mid + 1;
//       }

//       if (curr < target) {
//         l = mid + 1;
//       } else {
//         r = mid - 1;
//       }
//     }

//     return nums[l] > target ? l : l + 1;
//   };

//   for (let i = 0; i < queries.length; i++) {
//     const target = queries[i];
//     const index = bs(target);
//     queries[i] = index;
//   }

//   return queries;
// };

// const getSubsequence = (array, target) => {
//   const hashMap = {};
//   for (let i = 0; i < array.length; i++) {
//     const num1 = array[i];
//     for (let j = 0; j < array.length; j++) {
//       const num2 = array[j];

//     }

//   }
// }

var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  // prefix sum
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }

  const bs = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
      const mid = Math.floor(l + (r - l) / 2);
      const current = nums[mid];

      if (current === target) {
        return mid + 1;
      }
      if (current < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return nums[l] > target ? l : l + 1;
  };

  for (let i = 0; i < queries.length; i++) {
    queries[i] = bs(nums, queries[i]);
  }
  return queries;
};
// @lc code=end
