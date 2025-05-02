/*
 Find first non-repeating character in a string
🧠 Goal:
Return the first character that does not repeat.

firstUniqueChar("aabccdeff") ➝ "b"
*/

function firstUniqueChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // If no unique char
}

console.log(firstUniqueChar("aabccdeff")); // ➝ "b"
