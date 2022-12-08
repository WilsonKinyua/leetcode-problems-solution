/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  s = s.split("");
  let index = 0;
  let uniqueS = s.filter((value) => s.indexOf(value) === s.lastIndexOf(value));
  if (uniqueS.length === 0) index = -1;
  for (let str of s) {
    if (uniqueS[0] === str) index = s.indexOf(str);
  }
  return index;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
