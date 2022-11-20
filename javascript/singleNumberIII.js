var singleNumber = function (nums) {
  let a = 0;
  let b = 0;
  let xor = nums.reduce((a, b) => (a ^= b));
  let mask = 1;
  while ((xor & mask) === 0) {
    mask <<= 1;
  }
  nums.forEach((n) => {
    if ((n & mask) === 0) {
      a ^= n;
    } else {
      b ^= n;
    }
  });
  return [a, b];
};

console.log(singleNumber([2, 1, 1, 3, 2, 5]));
console.log(singleNumber([-1, 0]));
console.log(singleNumber([0, 1]));
