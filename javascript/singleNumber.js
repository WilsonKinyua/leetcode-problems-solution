var singleNumber = function (nums) {
  return nums.reduce((a, b) => (a ^= b));
};

console.log(singleNumber([2, 1, 2, 1, 4,4]));
