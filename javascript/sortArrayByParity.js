var sortArrayByParity = function (nums) {
  let evenNums = [];
  let oddNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evenNums.push(nums[i]);
    } else {
      oddNums.push(nums[i]);
    }
  }
  return [...evenNums, ...oddNums];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
