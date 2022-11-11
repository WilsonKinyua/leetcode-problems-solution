var hasGroupsSizeX = function (deck) {
  var arr = deck.sort();
  var newArr = [];
  while (arr.length > 0) {
    var splitIntoTwo = arr.splice(0, 2);
    newArr.push(splitIntoTwo);
  }
  return newArr
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
