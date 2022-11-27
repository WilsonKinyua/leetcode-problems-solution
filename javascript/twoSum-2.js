var twoSum = function (nums, target) {
  // sln 1: brute force
  //    let map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   let complement = target - nums[i];
  //   if (map.has(complement)) {
  //     return [map.get(complement), i];
  //   }
  //   map.set(nums[i], i);
  // }

  //   sln 2: two pointer though wrong answer (:
  //     let num1 = 0;
  //   let num2 = 0;
  //   for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] <= target) {
  //       num1 = nums[i];
  //       num2 = target - num1
  //     }
  //   }
  //   return [nums.indexOf(num1), nums.indexOf(num2)];

  
  //   sln 3: two pointer
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [j, i];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
