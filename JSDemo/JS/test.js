// Async, Await
// async function call() {
//   console.log("hello");
//   let response = await fetch(" https://api.github.com/users", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let result = await response.json();
//   console.log(result);
// }
// call();
// console.log("parth");

// Iterables
// let obj = {
//   name: "Parth",
//   no: 42,
//   next() {
//     this.no += 1;
//     return {
//       value: this.no,
//       done: false,
//     };
//   },
// };

// console.log(obj.next());
// console.log(obj.next());

// add unique length elements in array

// let str = ["abc", "acf", "abx", "bnabv", "ad", "bnabv", "a"];
// let len = [];
// let result = [];
// let deleted = new Set();
// for (let i of str) {
//   let ind = len.indexOf(i.length); //check if available in len or not(-1)
//   //if it is not in result and not deleted then add it to result
//   if (ind == -1 && !deleted.has(i.length)) {
//     result.push(i);
//     len.push(i.length);
//   } else {
//     // if it is in result so it is repeated then remove from result, len & add it into deleted
//     result.splice(ind, 1);
//     len.splice(ind, 1);
//     deleted.add(i.length);
//   }
// }
// console.log(result);

//  OR

// let array = ["parth", "harsh", "jay", "jay", "jay", "aa"];
// let len = {};
// array.map((item) => {
//   if (Array.from(Object.keys(len)).includes(String(item.length))) {
//     len[item.length]++;
//   } else {
//     len[item.length] = 1;
//   }
// });

// for (let key in len) {
//   if (len[key] != 1) {
//     delete len[key];
//   }
// }

// lenArr = Array.from(Object.keys(len));
// console.log(lenArr);

// result = array.filter((item) => {
//   if (lenArr.includes(String(item.length))) {
//     return true;
//   }
// });

// console.log(len);
// console.log(result);

// End

// p.oncontextmenu = function (event) {
//   event.preventDefault();
//   alert("P context menu");
//   //   event.stopPropagation();
// };

// div.oncontextmenu = function (event) {
//   if (event.defaultPrevented) return;
//   event.preventDefault();
//   alert("Div context menu");
// };
// form.oncontextmenu = function (event) {
//   event.preventDefault();
//   alert("form context menu");
// };

// Custom Events
// const spanTag = document.getElementById("spanTag");
// spanTag.addEventListener("myEvent", function (e) {
//   console.log(e);
//   spanTag.textContent = e.detail.number;
//   spanTag.style.color = e.detail.color;
// });
// function change(n, c) {
//   const event = new CustomEvent("myEvent", {
//     detail: {
//       color: c,
//       number: n,
//     },
//   });
//   dispatchEvent(event);
// }
// change(15, "red");

// -----------SET 1--------------------
// --------- Question 1-----------
// let persons = [
//   {
//     name: "parth",
//     job: "SDE",
//     bdate: new Date(2001, 03, 08),
//     age: 21,
//     city: "surat",
//   },
//   {
//     name: "rinkesh",
//     job: "SDE",
//     bdate: new Date(1999, 01, 10),
//     age: 22,
//     city: "surat",
//   },
//   {
//     name: "smit",
//     job: "SDE",
//     bdate: new Date(2008, 01, 22),
//     age: 13,
//     city: "surat",
//   },
// ];

// let age = prompt("Enter Age:");
// let result = persons.filter((item) => {
//   if (item.age == age) return item;
// });
// console.log(result);

// let result = persons.filter((item) => {
//   if (
//     item.bdate.getMonth() === new Date().getMonth() &&
//     item.bdate.getDate() === new Date().getDate()
//   ) {
//     return item;
//   }
// });
// console.log(result);

// persons.forEach((item, index) => {
//   if (item.age < 18) {
//     persons.splice(index, 1);
//   }
// });
// console.log(persons);

// --------- Question 2-----------
// let array = [1, 2, 625, 4, 99, 5, 16, 25, 17, 789, 20, 6, 36, 100];
// let result = array.filter((item, index) => {
//   if (array.includes(item ** 2)) {
//     return item;
//   }
// });
// console.log(array);
// console.log(result);

// ----------------Question 3-----------

// ----------------Question 4-----------
// let array = ["abccba", "aba", "smit", "rinkesh", "abcba"];
// let result = array.filter((item) => {
//   let flag = 0;
//   for (let i = 0; i < Math.ceil(item.length / 2); i++) {
//     if (item[i] == item[item.length - i - 1]) {
//       continue;
//     } else {
//       flag = 1;
//     }
//   }
//   if (flag == 0) {
//     return item;
//   }
// });
// console.log(result);

// ----------------Set 2-----------
// ----------------Question 1-----------
// const heros = [
//   { name: "Spider-Man" },
//   { name: "Thor" },
//   { name: "Black Panther" },
//   { name: "Captain Marvel" },
//   { name: "Silver Surfer" },
// ];
// let newArray = heros.map((item, index) => {
//   return { id: index, heroes: item.name };
// });
// console.log(newArray);

// ----------------Question 2-----------
// let array = [3, 9];
// let sum = 10;
// function check(array, sum) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] == sum) {
//         result.push([i, j]);
//       }
//     }
//   }
//   if (result.length != 0) {
//     return result;
//   } else {
//     return null;
//   }
// }
// console.log(check(array, sum));

// -------------------or -------------------

// let array = [3, 1, 5, 7, 5, 9];
// sum = 8;
// function check(array, sum) {
//   let result = [];
//   array.map((item, index) => {
//     let temp = array.slice(index + 1);
//     temp.map((item1, index1) => {
//       if (item + item1 == sum) {
//         result.push([index, index1 + index + 1]);
//       }
//     });
//   });
//   return result;
// }
// console.log(check(array, sum));

// ----------------Question 3-----------
// function changeFormate(userDate) {
//   let [m, d, y] = userDate.split("/");
//   return y + m + d;
// }
// console.log(changeFormate("12/31/2014"));

// ----------------Question 4-----------

// function cleanNames(array) {
//   let result = array.map((item) => item.trim());
//   return result;
// }
// console.log(
//   cleanNames([
//     " avengers",
//     "   captain_america",
//     "ironman   ",
//     " black panther   ",
//   ])
// );

// ----------------Set 3-----------
// ----------------Question 1-----------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   compareAge({ age }) {
//     if (this.age < age) {
//       return "elder then me";
//     } else if (this.age === age) {
//       return "same age as me";
//     } else {
//       return "Younger then me";
//     }
//   }
// }
// let p1 = new Person("Samuel", 24);
// let p2 = new Person("joel", 36);
// let p3 = new Person("Lily", 24);
// console.log(p1.compareAge(p2));
// console.log(p2.compareAge(p1));
// console.log(p1.compareAge(p3));

// ----------------Question 2-----------

// let nums = [11, 22, 33, 46, 75, 86, 97, 98];

// let evenNums = nums.filter((item) => {
//   if (item % 2 == 0) {
//     return item;
//   }
// });
// let squaredEvenNums = evenNums.map((item) => item ** 2);
// console.log(squaredEvenNums);

// let sum = nums.reduce((acc, item) => (acc += item));
// console.log(sum);

// ----------------Question 3-----------
// function checkEve(date) {
//   if (date.getMonth() === 11 && date.getDate() === 24) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkEve(new Date(2013, 11, 24)));
// console.log(checkEve(new Date(2013, 0, 23)));
// console.log(checkEve(new Date(3000, 11, 24)));

// ----------------Question 4-----------

// let p = "rinkesh rinkesh rinkesh smit smit parth harsh harsh harsh";
// let d = {};
// let arr = p.split(" ");
// for (let ele of arr) {
//   let count = 0;
//   for (let ele1 of arr) {
//     if (ele === ele1) {
//       count++;
//     }
//   }
//   d[ele] = count;
// }
// console.log(d);

// ---------------------------Questions-----------------------------
// const objectArr = [
//     {
//         id: 1,
//         value: "abc"
//     },
//     "bob",
//     "aris",
//     {
//         id: 2,
//         value: "xyz"
//     },
//     {
//         id: 3,
//         value: "nimo"
//     },
//     {
//         id: 4,
//         value: "keshav"
//     },
//     "Kelvin",
//     "Amy",
//     "sheldon"
// ]

// 1 > output should be:
// [{
//     id: 1,
//     value: "abc"
// },
// {
//     id: "bob",
//     value: "bob"
// },
// {
//     id: "aris",
//     value: "aris",
// },
// {
//     id: 2,
//     value: "xyz"
// },
// {
//     id: 3,
//     value: "nimo"
// },
// {
//     id: 4,
//     value: "keshav"
// },
// {
//     id: "kelvin",
//     value: "Kelvin"
// },
// {
//     id: "amy",
//     value: "Amy"
// },
// {
//     id: "sheldon",
//     value: "sheldon"
// }
// ]
// note: where we don't have an object and only string convert it to the object and id should stored in small letter but value should be same as string.

// 3.const arr = ["zyx", "nys", "as", "d", "e", "kkkk", "78"]
// delete strings with unique length

// 4.const arr4 = [
//     {
//         id: 1,
//         value: "abc",
//         child: [
//             {
//                 id: "abc"
//             },
//             {
//                 id: "dog"
//             },
//         ]
//     },
//     {
//         id: "bob",
//         value: "bob",
//         child: [
//             {
//                 id: "abc"
//             },
//             {
//                 id: "dog"
//             },
//             {
//                 id: "bob"
//             },
//             {
//                 id: "dog"
//             },
//         ]
//     },
//     {
//         id: "aris",
//         value: "aris",
//     },
//     {
//         id: 2,
//         value: "xyz"
//     },
//     {
//         id: 3,
//         value: "nimo",
//         child: [
//             {
//                 id: "bob"
//             },
//             {
//                 id: "dog"
//             },
//             {
//                 id: "nimo"
//             },
//             {
//                 id: "dog"
//             },
//         ]
//     },
//     {
//         id: 4,
//         value: "keshav"
//     },
//     {
//         id: "kelvin",
//         value: "kelvin"
//     },
//     {
//         id: "amy",
//         value: "amy"
//     },
//     {
//         id: "sheldon",
//         value: "sheldon"
//     }
// ]

// output:
// [
//     {
//         id: 1,
//         value: "abc",
//         child: [
//             {
//                 id: "abc",
//                 childvalue:"ABC"
//             },
//         ]

//     },
//     {
//         id: "bob",
//         value: "bob",
//         child: [
//             {
//                 id: "bob",
//                 childvalue:"BOB"
//             },
//         ]
//     },
//     {
//         id: "aris",
//         value: "aris",
//     },
//     {
//         id: 2,
//         value: "xyz"
//     },
//     {
//         id: 3,
//         value: "nimo",
//         child: [
//             {
//                 id: "nimo",
//                 childvalue:"NIMO"
//             },
//         ]
//     },
//     {
//         id: 4,
//         value: "keshav"
//     },
//     {
//         id: "kelvin",
//         value: "kelvin"
//     },
//     {
//         id: "amy",
//         value: "amy"
//     },
//     {
//         id: "sheldon",
//         value: "sheldon"
//     }
// ]

// 5.let arr1=[
//     {
//         id:1,
//         name:"bob"
//     },
//     {
//         id:2,
//         name:"sam"
//     },
//     {
//         id:3,
//         name:"jimmy"
//     },
//     {
//         id:4,
//         name:"nimol"
//     },
// ]

// let arr2=[
//     {
//         id:2,
//         name:"sam",
//         salary:47854
//     },
//     {
//         id:4,
//         name:"nimol",
//         salary:84944
//     },
//     {
//         id:3,
//         name:"jimmy",
//         salary:28444
//     },
//     {
//         id:1,
//         name:"bob",
//         salary:48494
//     },
// ]

// arr3=[
//     {
//         id:2,
//         isemployee:true
//     },
//     {
//         id:3,
//         isemployee:true
//     }
// ]

// merge those 3 arrays
// output:
// [
//     {
//         id:1,
//         name:"bob",
//         salary:48494
//     },
//     {
//         id:2,
//         name:"sam",
//         salary:47854,
//         isemployee:true
//     },
//     {
//         id:3,
//         name:"jimmy",
//         salary:28444,
//         isemployee:true
//     },
//     {
//         id:4,
//         name:"nimol",
//         salary:84944
//     },
// ]
// Solution-5--------------------------------------------

// let arr1 = [
//   { id: 1, name: "bob" },
//   { id: 2, name: "sam" },
//   { id: 3, name: "jimmy" },
//   { id: 4, name: "nimol" },
// ];

// let arr2 = [
//   { id: 2, name: "sam", salary: 47854 },
//   { id: 4, name: "nimol", salary: 84944 },
//   { id: 3, name: "jimmy", salary: 28444 },
//   { id: 1, name: "bob", salary: 48494 },
// ];

// let arr3 = [
//   { id: 2, isemployee: true },
//   { id: 3, isemployee: true },
// ];
// let arr = [...arr1, ...arr2, ...arr3];
// let result = [];

// arr.forEach((item) => {
//   let flag = 0;
//   for (let i in result) {
//     if (result[i].id == item.id) {
//       result[i] = { ...result[i], ...item };
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 0) {
//     result.push(item);
//   }
// });
// console.log(result);

// let obj1 = {
//   a: "parth",
//   b: "Rahul",
// };
// let obj2 = {
//   a: "abc",
//   c: "aniket",
// };
// let obj = { ...obj1, ...obj2 };
// console.log(obj);

// let a = [{ name: "parth" }, { name: "rinkesh" }];
// let result = a.map((item) => {
//   item.address = "add";
//   return item;
// });
// console.log(a, result);

// let b = [{ name: "parth" }, { name: "rinkesh" }];
// let result1 = b.map((item) => {
//   return {
//     ...item,
//     address: "add",
//   };
// });
// console.log(b, result1);
