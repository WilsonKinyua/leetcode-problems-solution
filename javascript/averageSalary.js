/**
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary = salary.sort((a, b) => a - b);
  return (
    (salary.reduce((a, b) => a + b) - (salary[salary.length - 1] + salary[0])) /
    (salary.length - 2)
  );
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
console.log(
  average([
    25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
    40000,
  ])
);
