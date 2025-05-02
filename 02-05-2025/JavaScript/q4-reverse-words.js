// Reverse Words in a Sentence

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("I love JS")); // Output: "JS love I"
