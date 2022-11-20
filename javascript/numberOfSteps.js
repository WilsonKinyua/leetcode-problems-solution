const numberOfSteps = (num) => {
  let steps = 0;
  while (num > 0) {
    steps += 1;
    num = num % 2 === 0 ? num / 2 : num - 1;
  }
  return steps;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
