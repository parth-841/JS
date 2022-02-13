// Array Destructuring
console.log("Array Destructuring:");
let a = [1, 2, 4, 2, 6];
[b, c] = a;
console.log(b, c);
console.log("\n");

[b, c, ...d] = a;
console.log(b, c, d);
console.log("\n");

// Object Destructuring
console.log("Object Destructuring:");
let obj = {
  0: "abc",
  1: "def",
  2: "ghi",
  3: "xyz",
};
let { 0: x, 1: y } = obj;
console.log(x, y);
console.log("\n");

let { 0: p, 1: q, ...r } = obj;
console.log(p, q, r);
