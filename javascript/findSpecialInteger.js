var findSpecialInteger = function (arr) {
  let count = 0;
  let current = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] === current ? count++ : (count = 1);
    current = arr[i];
    if (count > arr.length / 4) return current;
  }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
