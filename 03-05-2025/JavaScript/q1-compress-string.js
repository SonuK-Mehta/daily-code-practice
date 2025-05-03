// =========== 1: Compress string — skip groups of 1 ================

function compressSmart(str) {
  let res = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count !== 1) res += str[i] + count;
      else res += str[i];
      count = 1;
    }
  }
  return res;
}
console.log(compressSmart("aaabbc"));
