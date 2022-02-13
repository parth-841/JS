// map
let map = new Map([
  ["1", "Parth"],
  [1, "Harry"],
  [true, "Rinkesh"],
]);
console.log("map:", map);
console.log("\n");

// get
console.log("map.get:", map.get("1"));
console.log("\n");

// has
console.log("map.has:", map.has(1));
console.log("\n");

// delete
console.log("map.delete:", map.delete(true));
console.log("\n");

// set
map.set(true, "Rinkesh");
console.log("map.set:", map);
console.log("\n");

// size
console.log("map.size", map.size);
console.log("\n");

// keys
console.log("map.keys:", map.keys());
console.log("\n");

// values
console.log("map.values:", map.values());
console.log("\n");

// entries
console.log("map.entries:", map.entries());
console.log("\n");

// map.forEach
console.log("map.forEach:");
map.forEach((value, key, map) => {
  console.log(key, ":", value, ":", map);
});
console.log("\n");

// clear
map.clear();
console.log("map.clear:", map);
console.log("\n");

// map from Object
console.log("Map from Object");
let obj = {
  name: "Parth",
  no: 42,
};
console.log("object:", obj);
map = new Map(Object.entries(obj));
console.log("Map:", map);
console.log("\n");

// Object from map
console.log("Objct from map");
console.log("Map:", map);
console.log("Object", Object.fromEntries(map.entries()));
