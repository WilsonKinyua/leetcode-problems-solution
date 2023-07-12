/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (map[last] !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

// https://leetcode.com/problems/valid-parentheses/
// explain the sudo code
// https://www.youtube.com/watch?v=9QVZt1d1sEQ
