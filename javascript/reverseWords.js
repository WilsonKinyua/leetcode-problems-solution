var reverseWords = function (s) {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").reverse().join(""));
  }
  return newArr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
