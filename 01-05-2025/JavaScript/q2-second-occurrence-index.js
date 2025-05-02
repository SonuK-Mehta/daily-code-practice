/* 
Find the index of second occurrence of a number
🧠 Goal:
Return the index of the second time a number appears.
If it doesn’t appear twice, return -1.

greaterThanCount([1, 4, 7, 2, 6], 4) ➝ 2
*/

function secondIndex(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
      if (count === 2) {
        return i;
      }
    }
  }
  return -1;
}

console.log(secondIndex([3, 1, 4, 1, 5], 1)); // ➝ 3
console.log(secondIndex([2, 3, 4], 3)); // ➝ -1
