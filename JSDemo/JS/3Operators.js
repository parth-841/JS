// Conditional Operator (? :)
console.log("Conditional Operator:");
let age = 18;
let access = age > 18 ? true : false;
console.log(access);
console.log("\n");

// logical Operators
console.log("Logical Operators:");

// OR(||)
console.log("OR(||)");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(1 || 0);
console.log(0 || 1);
console.log(undefined || null || 0); // All are Falsy values
console.log(1 || 0 || null || undefined); // 1 is truthy
let fname = "";
let lname = "";
let nickName = "Parth";
console.log(fname || lname || nickName);
console.log("\n");

// AND(&&)
console.log("(&&)");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(1 && 0);
console.log(0 && 1);
console.log(1 && 1);
console.log(null && 1);
console.log(1 && undefined);
console.log("\n");

// NOT(!)
console.log("NOT(!)");
console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!"");
console.log(!"0");
console.log("\n");

// Nullish coalescing(??)
console.log("Nullish coalescing(??) Operator:");
let user;
console.log(user ?? "Guest");

let obj = {
  name: "Parth",
  age: 21,
};
console.log(obj.name ?? "Guest");
