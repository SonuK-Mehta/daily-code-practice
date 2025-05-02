/*
Check if a string is a palindrome (no reverse function)
🧠 Goal:
Check if string reads the same forwards and backwards.

isPalindrome("madam") ➝ true  
isPalindrome("hello") ➝ false
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam")); // ➝ true
console.log(isPalindrome("hello")); // ➝ false

// Another methods-

// function isPalindrome(str) {
//     let reverseStr = '';
//     for(let i = str.length - 1; i>=0; i--) {
//         reverseStr += str[i]
//     }
//     if(str === reverseStr) return true
//     else return false
// }
// console.log(isPalindrome('madam'));
// console.log(isPalindrome('hello'));
