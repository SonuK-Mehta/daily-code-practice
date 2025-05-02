/*
. Return all pairs with sum = target (Brute force)
🧠 Goal:
Return all pairs that sum up to a target (brute-force way).

pairSum([1, 2, 3, 4, 5], 5)  
➝ [[1,4], [2,3]]
*/

function pairSum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(pairSum([1, 2, 3, 4, 5], 5)); // ➝ [[1,4], [2,3]]
