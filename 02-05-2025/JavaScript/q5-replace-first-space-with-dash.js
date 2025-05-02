//  Replace Only the First Space With a Dash

function replaceFirstSpace(str) {
  let found = false;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && !found) {
      result += "-";
      found = true;
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(replaceFirstSpace("Hello World JavaScript"));
// Output: "Hello-World JavaScript"
