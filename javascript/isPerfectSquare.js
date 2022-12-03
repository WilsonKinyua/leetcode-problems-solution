/**
 * https://leetcode.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  const sqt = Math.sqrt(num);
  return sqt === Math.floor(sqt) ? true : false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
