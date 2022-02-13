// Set
let set = new Set(["Parth", "Rinkesh", "Smit", "Rinkesh"]);
console.log("Set:", set);
console.log("\n");

// add
set.add("Rahul");
console.log("set.add:", set);
console.log("\n");

// delete
set.delete("Rahul");
console.log("set.delete:", set);
console.log("\n");

// has
console.log("set.has:", set.has("Rahul"));
console.log("\n");

//size
console.log("set.size:", set.size);
console.log("\n");

// forEach
console.log("forEach:");
set.forEach((val, val2, set) => {
  console.log(val, val2, set);
});
console.log("\n");

// clear
set.clear();
console.log("set.clear():", set);
