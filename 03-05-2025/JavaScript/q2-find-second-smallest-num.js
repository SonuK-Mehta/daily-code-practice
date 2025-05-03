// ================ 2: Find second smallest number ==================

function secondSmallest(arr) {
  let min = Infinity;
  let secondMin = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] !== min) {
      secondMin = arr[i];
    }
  }
  return secondMin;
}
console.log(secondSmallest([5, 2, 10, 3, 1]));
