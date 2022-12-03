/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // let newArray = [];
  // const filtering = nums.filter((value) => {
  //   if (value !== 0) return value !== 0;
  //   newArray.push(value);
  // });
  // return filtering.concat(newArray);

  // let newArray = [];
  // let zeros = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== 0) {
  //     newArray.push(nums[i]);
  //   } else {
  //     zeros.push(nums[i]);
  //   }
  // }
  // return newArray.concat(zeros);

  // const numsArray = nums.filter((value) => value !== 0);
  // const numsZeroArray = nums.filter((value) => value === 0);
  // return [
  //   ...nums.filter((value) => value !== 0),
  //   ...nums.filter((value) => value === 0),
  // ];

  // const nonZeros = nums.filter((num) => num !== 0);
  // return nonZeros.concat(nums.filter((num) => num === 0));

  // Create two pointers, one that points to the next non-zero element
  // and another that points to the next zero element.
  let nonZero = 0;
  let zero = 0;

  // Loop through the array until the next zero pointer reaches the end.
  while (zero < nums.length) {
    // If the current element is non-zero, swap it with the next non-zero element
    // and advance both pointers.
    if (nums[zero] !== 0) {
      [nums[nonZero], nums[zero]] = [nums[zero], nums[nonZero]];
      nonZero++;
      zero++;
    }
    // Otherwise, just advance the zero pointer.
    else {
      zero++;
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
