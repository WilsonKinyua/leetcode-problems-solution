// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let com = target - nums[i];
    if (map.has(com)) {
      return [map.get(com), i];
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
