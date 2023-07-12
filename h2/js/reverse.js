/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  let result = +Math.abs(x).toString().split("").reverse().join("");
  return x < 0 ? -result : result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 12
