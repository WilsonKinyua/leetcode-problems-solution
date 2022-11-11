const sortedSquareArray = function (array) {
  var newArray = [];
  array.forEach((num) => {
    newArray.push(num ** 2);
  });

  return newArray;
};

sortedSquareArray([1, 2, 3, 5, 6, 8, 9]);
