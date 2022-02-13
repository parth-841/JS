//Json

let user = {
  sayHi() {
    alert("Hello");
  },
  [Symbol("id")]: 42,
  something: undefined,
};
// Methods, symbols and undefined are ignored
console.log(JSON.stringify(user));

user = {
  name: "Parth",
  obj: {
    date: new Date(),
  },
};
// Stringify (object,replacer,space)
let str = JSON.stringify(user, ["obj", "date"], 2);
console.log(str);

// parse (str,reviver)
console.log(
  JSON.parse(str, (key, value) => {
    if (key == "date") {
      return new Date();
    }
    return value;
  })
);

// toJSON
let obj1 = {
  number: 42,
  toJSON() {
    return this.number;
  },
};
console.log(JSON.stringify(obj1));
