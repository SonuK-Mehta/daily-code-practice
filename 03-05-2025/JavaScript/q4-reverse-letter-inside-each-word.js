// =============== 4: Reverse letters inside each word =================

function reverseLetters(str) {
  let arr = str.split(" ");
  let res = "";
  let a = "";
  for (let i of arr) {
    for (let j = i.length - 1; j >= 0; j--) {
      a += i[j];
    }
    res += a + " ";
    a = "";
  }
  return res.trim();
}
console.log(reverseLetters("I love JavaScript"));

// Sortend Methods -

// function reverseLetters(str) {
//     return str.split(' ').map(s => s.split('').reverse().join('')).join(' ');
// }
