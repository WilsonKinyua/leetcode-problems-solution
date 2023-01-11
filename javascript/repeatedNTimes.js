/**
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
//   return nums.filter((value, index) => nums.indexOf(value) !== index)[0];
  return nums.filter((value, index) => nums.lastIndexOf(value) !== index);
};

console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5
console.log(repeatedNTimes([3, 1, 5, 2, 6, 4, 7, 8])); // 5
