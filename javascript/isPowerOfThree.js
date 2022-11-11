var isPowerOfThree = function (n) {
    // for (let x = 1; x <= n; x++) {
    //     if (n === 3 ** x) return true;
    //   }
    //   return false;
    if (n===0) return false
    while (n % 3 === 0) {
        n/=3
    }
    return true
};

console.log(isPowerOfThree(27));
