/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let sortedArr = nums.sort((a, b) => b - a);
  let current = 0;
  let max = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1] + 1) {
      current++;
    } else {
      current = 0;
    }
    if (current > max) {
      max = current;
    }
  }
  return max === [] ? [] : max + 1;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
