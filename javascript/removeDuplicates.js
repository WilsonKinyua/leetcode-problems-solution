/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //   return nums.filter((value, index) => nums.indexOf(value) === index);
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1,2,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
