// Normal function
console.log(sum(2, 5));
console.log(sum());
function sum(a = 5, b = 5) {
  return a + b;
}

// Function Expression && Named Function Expression
console.log("\nFunction Expression && Named Function Expression:");
let fact = function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(fact(5));
let func = fact;
fact = null;
console.log(func(5));

// Arrow Function && CallBack Function
console.log("\nArrow Function && CallBack Function:");

let summation = (a, b) => a + b;
console.log(summation(2, 5));

setTimeout(() => {
  console.log("Message After 2 seconds.");
}, 2000);
