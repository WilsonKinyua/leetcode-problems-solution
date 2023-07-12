/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0; // 0
  let right = nums.length - 1; // 5
  while (left <= right) { // 0 <= 5
    const mid = Math.floor((left + right) / 2); // 2
    if (nums[mid] === target) { // 3 === 9
      return mid; // 3
    } else if (nums[mid] < target) { // 3 < 9
      left = mid + 1; // 3
    } else {
      right = mid - 1; // 2
    }
  }
  return -1; // -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([], 0));

