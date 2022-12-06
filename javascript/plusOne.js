/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //   digits = parseInt(digits.join("")) + 1;
  //   return digits.toString().split("");
  var carry = 1;
  for (var i = digits.length - 1; i >= 0; i--) {
    var sum = digits[i] + carry;
    carry = sum >= 10 ? 1 : 0;
    digits[i] = sum % 10;
  }
  if (carry == 1) digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
