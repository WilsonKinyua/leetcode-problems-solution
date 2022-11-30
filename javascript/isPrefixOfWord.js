/**
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  // this will get the last element it finds instead of the first
  //   sentence = sentence.split(" ");
  //   let result = 0;
  //   for (let i = 0; i < sentence.length; i++){
  //     if (sentence[i].includes(searchWord)) result = i;
  //   }
  //   return result ? result + 1 : -1;
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].startsWith(searchWord)) return 1 + i;
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2
console.log(isPrefixOfWord("i am tired", "you")); // -1
