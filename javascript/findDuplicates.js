var findDuplicates = function (nums) {
  return nums.filter((value, index) => nums.indexOf(value) !== index);
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
