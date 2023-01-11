let twoArraySum = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * 2 === arr2[j]) {
        return true;
      }
    }
  }
};

console.log(twoArraySum([1, 2, 3], [4, 1, 9])); // true
console.log(twoArraySum([1, 2, 3], [1, 9])); // false
console.log(twoArraySum([1, 2, 1], [4, 4, 1])); // false
