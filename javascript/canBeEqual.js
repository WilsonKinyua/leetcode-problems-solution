var canBeEqual = function (target, arr) {
  return JSON.stringify(arr.sort()) === JSON.stringify(target.sort()) ? true : false;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false
