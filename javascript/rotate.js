/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // const reverseArr = nums.splice(-k);
  // nums = nums.filter((value) => !reverseArr.includes(value));
  // return [...reverseArr, ...nums];

  // correct though exceeds runtime 😢
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;

};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
