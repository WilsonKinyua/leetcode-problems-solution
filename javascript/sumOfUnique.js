var sumOfUnique = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      sum += nums[i];
    }
  }
  return sum;
};

console.log(sumOfUnique([1, 1, 1, 1, 1]));
