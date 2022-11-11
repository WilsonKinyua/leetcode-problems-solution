var findDisappearedNumbers = function (nums) {
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) == -1) missingNums.push(i);
  }
  return missingNums;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
