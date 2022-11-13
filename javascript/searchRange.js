var searchRange = function (nums, target) {
  let arrayIndex = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) arrayIndex.push(i);
  }
  return arrayIndex.length === 0
    ? [-1, -1]
    : [arrayIndex[0], arrayIndex[arrayIndex.length - 1]];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
