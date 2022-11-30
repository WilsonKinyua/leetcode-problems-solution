/**
 * https://leetcode.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  num = num.toString().split("");
  return num.reduce((a, b) => {
    if (num.length > 1)
      return (parseInt(a) + parseInt(b))
        .toString()
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b));
  });
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
