// ================ 3: Swap strings without extra variable ===============

let a = "hello";
let b = "world";

a = a + b;
b = a.slice(0, a.length - b.length);
a = a.slice(b.length);
console.log(a, b);
