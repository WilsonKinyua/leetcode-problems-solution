/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  // step 1: change s to an array
  //   s = s.split("").reverse().join("");
  if (s.length === goal.length) {
    return true;
  }
  return false;
  //   if (s === goal) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // step 2: swap first and second element of the array
  // step 3: merge the array and compare if string is same as goal
};

console.log(buddyStrings("ab", "ba")); // true
console.log(buddyStrings("ab", "ab")); // false
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb")); // true
