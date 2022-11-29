/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim("").split(" ").filter(Boolean);
  let newStr = [];
  for (let i = 0; i < s.length; i++) {
    newStr.push(s[i].split("").join(""));
  }
  return newStr.reverse().join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
