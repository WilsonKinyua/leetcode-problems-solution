/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < gain.length; i++) {
    current += gain[i];
    if (current > max) {
      max = current;
    }
  }
  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
