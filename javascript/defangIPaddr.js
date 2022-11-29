/**
 * https://leetcode.com/problems/defanging-an-ip-address/
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  address = address.split("");
  let newAdress = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newAdress.push((address[i] = "[.]"));
    } else {
      newAdress.push(address[i]);
    }
  }
  return newAdress.join("");
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));
console.log(defangIPaddr("1.1.1.1"));
