// object
console.log("object:");
let id = "Enrollment Number";
let obj = {
  name: "Parth",
  age: 21,
  [id]: 42,
};
obj.gender = "male";
console.log(obj, obj.gender);
delete obj.gender;
console.log(obj);
console.log("\n");

// Square Brackets
console.log("Square Brackets:");
obj["full name"] = "Parth Patel";
console.log(obj, obj["full name"]);
console.log("\n");

// for...in
console.log("For..in:");
for (let key in obj) {
  console.log(key, ":", obj[key]);
}
console.log("\n");

// Object.keys(), values(), entries()
console.log("Object.keys(), values(), entries():");
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log("\n");

//Copying of object
console.log("Copying of object:");
let clone = Object.assign({}, obj);
console.log("clone:", clone);
console.log(obj === clone);
console.log("\n");

// Methods in Onject
console.log("Methods in Onject:");
let object = {
  name: "parth",
  method1() {
    console.log("Method 1 called");
  },
  method2: function () {
    console.log("Method 2 called");
  },
};
object.method1();
object.method2();
console.log("\n");

//Constructor and new
// constructor name start with capital Latter and accessed using new
// it is used to create many objects
console.log("Constructor:");
function User(name, age = 21) {
  this.name = name;
  this.age = age;
}
let user1 = new User("Parth");
let user2 = new User("Rinkesh", 22);
console.log(user1.name, user1.age);
console.log(user2.name, user2.age);
console.log("\n");

// Methods in Constructor
console.log("Methods in Constructor:");
function User(name, age = 21) {
  (this.name = name),
    (this.age = age),
    (this.method1 = function () {
      console.log(`Hello, ${this.name}`);
    });
}
let user3 = new User("Jay");
user3.method1();
console.log("\n");

// Optional Chaining ?.
console.log("Optional Chaining(?.):");
console.log(user1?.name);
let user4;
console.log(user4?.name);
console.log("\n");

// Symbol Type
console.log("Symbol Type:");
let id1 = Symbol();
let id2 = Symbol();
console.log(id1, typeof id1);
console.log(id1 === id2);
// Global Registry
let id3 = Symbol.for("id");
let id4 = Symbol.for("id");
console.log(id3 === id4);
console.log(Symbol.keyFor(id4));
// Symbols are skipped by for...in and Object.keys
