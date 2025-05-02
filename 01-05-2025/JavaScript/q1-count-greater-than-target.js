/* 
Count elements greater than a given number
🧠 Goal:
Return how many elements in array are strictly greater than target.

greaterThanCount([1, 4, 7, 2, 6], 4) ➝ 2 
*/

function greaterThanCount(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      count++;
    }
  }
  return count;
}

console.log(greaterThanCount([1, 4, 7, 2, 6], 4));
