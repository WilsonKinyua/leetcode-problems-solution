var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";
    
    while (i >= 0 || j >= 0 || carry) {
        let sum = 0;
        if (i >= 0) {
        sum += parseInt(num1[i]);
        i--;
        }
        if (j >= 0) {
        sum += parseInt(num2[j]);
        j--;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    return result;
};

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
