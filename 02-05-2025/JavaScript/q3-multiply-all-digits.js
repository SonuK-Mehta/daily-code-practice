// Multiply All Digits of a Number

function multiplyDigits(num) {
  let product = 1;
  let str = num.toString();

  for (let i = 0; i < str.length; i++) {
    product *= parseInt(str[i]);
  }

  return product;
}

console.log(multiplyDigits(1234)); // Output: 24
