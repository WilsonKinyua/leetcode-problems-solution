/**
 * @param {number} x
 * @return {number}
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/880/
 */
var reverse = function (x) {
  if (x === 0) return 0;
  const negative = x < 0;
//   x = Math.abs(x);
  let result = 0;
  while (x) {
    result = result * 10 + (x % 10);
    if (result > 2147483647) {
      return 0;
    }
    x = Math.floor(x / 10);
  }
  return negative ? -result : result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); //21
console.log(reverse(2147483649)); //21
