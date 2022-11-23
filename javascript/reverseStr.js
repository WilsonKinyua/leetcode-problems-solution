var reverseStr = function (s, k) {
  let result = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    result += s
      .slice(i, i + k)
      .split("")
      .reverse()
      .join("");
    result += s.slice(i + k, i + 2 * k);
  }
  return result;

  // s = s.split("");
  //   let kChars = [];
  //   let restChars = [];
  //   for (let i = 0; i < s.length; i++) {
  //     if (i < k) {
  //       kChars.push(s[i]);
  //     } else if (i >= k) {
  //       restChars.push(s[i]);
  //     }
  //   }
  //   return [...kChars.reverse(""), ...restChars.sort().join("")].join("");
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcd", 2));

// bacdfeg
