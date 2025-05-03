// ============ 5: Find 2 missing numbers from 1 to N ==============

function missingTwoNumbers(arr) {
  let n = arr.length + 2;
  let totalSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
}

console.log(missingTwoNumbers([1, 2, 4, 6]));

//  function missingTwoNumbers(arr) {
//    let n = arr.length + 2;
//    //  let set = arr;
//    let set = new Set(arr);
//    let res = [];
//    for (let i = 1; i <= n; i++) {
//      //  if(!set.includes(i)) res.push(i);
//      if (!set.has(i)) res.push(i);
//    }
//    return res;
//  }
