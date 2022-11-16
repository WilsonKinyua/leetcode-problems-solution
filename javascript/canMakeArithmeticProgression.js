var canMakeArithmeticProgression = function (arr) {
  //   1. sort the array
  arr.sort((a, b) => a - b);
  let diffArr = [];
  // 2. Get the difference between number by looping through the array
  for (let i = 1; i < arr.length; i++) {
    diffArr.push(arr[i] - arr[i - 1]);
  }
  // 3. Check if all the difference are the same
  return diffArr.every((diff) => diff === diffArr[0]);
};

console.log(canMakeArithmeticProgression([3, 5, 1])); // 1,3,5
console.log(canMakeArithmeticProgression([1, 2, 4])); // 1,2,4
console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16])); // 1,2,4
