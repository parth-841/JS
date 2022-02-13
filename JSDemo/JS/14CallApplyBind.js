// function.call & function borrowing
let user = {
  no: 1,
  name: "Parth",
  sayHi(greetings, fname) {
    console.log(greetings, this.name, fname);
  },
};
let user1 = {
  no: 2,
  name: "Rinkesh",
};
user.sayHi.call(user1, "Hello", "Ranpariya");

// apply
user.sayHi.apply(user1, ["Hiy", "Ranpariya"]);

// bind
let variable = user.sayHi.bind(user1, "Hello", "Ranpariya");
variable();

// partial function in binding
function mul(a, b) {
  console.log(a * b);
}
let double = mul.bind(null, 2);
double(3);
double(4);
