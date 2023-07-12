/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //   return s
  //     .trim()
  //     .split(" ")
  //     .slice(-1)
  //     .toString().length;

  let arrayString = s.trim().split(" ");
  return arrayString[arrayString.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
