/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x === parseInt(x.toString().split("").reverse().join(""))
    ? true
    : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(246));
console.log(isPalindrome(-121));
