// array.find
let a = [1, 2, 3];
let result = a.find((item) => item < 3);
console.log("a:", a);
console.log("find:", result);
console.log("\n");

// array.filter
result = a.filter((item) => item < 3);
console.log("a:", a);
console.log("filter:", result);
console.log("\n");

// array.map
a = ["parth", "Jay"];
result = a.map((item) => item.length);
console.log("a:", a);
console.log("map:", result);
console.log("\n");

// array.sort
a = [1, 3, 12, 4];
console.log("a:", a);
console.log("sort:", a.sort());
console.log("\n");

// array.reverse
console.log("a:", a);
console.log("a.reverse:", a.reverse());
console.log("\n");

// array.join
console.log("a:", a);
console.log("a.join:", a.join(", "));
console.log("\n");

// array.reduce
console.log("a:", a);
console.log(
  "a.reduce:",
  a.reduce((acc, item) => acc + item, 0)
);
console.log("\n");

// Array.from
a = { 1: "parth", 0: "harsh", name: "harry", length: 2 };
console.log("a:", a);
console.log("Array.from:", Array.from(a));
console.log("\n");

a = [1, 2, 3, 4, 5];
let b = a.map((item, index) => {
  if (index == 1 || index == 3) {
    return (item += 2);
  }
  return item;
});
console.log(b);

// let arr = [
//   { isTrue: true },
//   { isTrue: false },
//   { isTrue: false },
//   { isFalse: false },

// ];
// let result1 = arr.reduce(
//   (acc, item) => {
//     if (item.isTrue === true || item.isFalse === false) {
//       acc.isTrue += 1;
//     }
//     if (item.isTrue === false || item.isFalse === true) {
//       acc.isFalse += 1;
//     }
//     return acc;
//   },
//   { isTrue: 0, isFalse: 0 }
// );
// console.log(result1);
