/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  sentences.map((sentence) => {
    let sentenceArray = sentence.split(" ");
    if (max < sentenceArray.length) max = sentenceArray.length;
  });
  return max;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
); // 6
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
); // 3
