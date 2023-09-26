/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */

// function mergeSort(arr) {
//   // divide
//   if (arr.length <= 1) return arr;

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   mergeSort(left);
//   mergeSort(right);

//   // conquer
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (j < left.length && k < right.length) {
//     if (left[j] < right[k]) {
//       arr[i] = left[j];
//       j++;
//     } else {
//       arr[i] = right[k];
//       k++;
//     }
//     i++;
//   }

//   while (j < left.length) {
//     arr[i] = left[j];
//     j++;
//     i++;
//   }

//   while (k < right.length) {
//     arr[i] = right[k];
//     k++;
//     i++;
//   }
//   return arr;
// }

const sortArray2 = (nums) => {
  // divide
  // if (nums.length <= 1) return nums;

  // const middle = Math.floor(nums.length / 2);
  // const left = nums.slice(0, middle);
  // const right = nums.slice(middle);

  // sortArray(left);
  // sortArray(right);

  // // conquer
  // let i = 0;
  // let j = 0;
  // let k = 0;

  // divide
  if (nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  sortArray(left);
  sortArray(right);

  // conquer
  let i = 0;
  let j = 0;
  let k = 0;

  while (j < left.length && k < right.length) {
    if (left[j] < right[k]) {
      nums[i] = left[j];
      j++;
    } else {
      nums[i] = right[k];
      k++;
    }
    i++;
  }

  while (j < left.length) {
    nums[i] = left[j];
    i++;
    j++;
  }

  while (k < right.length) {
    nums[i] = right[k];
    i++;
    k++;
  }
  return nums;
};

const sortArray = (nums) => {
  // divide
  if (nums.length <= 1) return nums;

  // const middle = nums.length / 2;
  let left = nums.slice(0, nums.length / 2);
  let right = nums.slice(nums.length / 2);

  sortArray(left);
  sortArray(right);

  // conquer
  let i = 0;
  let j = 0;
  let k = 0;

  while (j < left.length && k < right.length) {
    if (left[j] < right[k]) {
      nums[i] = left[j];
      j++;
    } else {
      nums[i] = right[k];
      k++;
    }
    i++;
  }

  while (j < left.length) {
    nums[i] = left[j];
    i++;
    j++;
  }

  while (k < right.length) {
    nums[i] = right[k];
    i++;
    k++;
  }
  return nums;
};
// const sortArray = mergeSort;
// const res = sortArray([5, 2, 3, 1]);
// res;
// @lc code=end
