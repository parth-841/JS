// ----------------------------------------------SET 1-----------------------------------

// --------- Question 1-----------

// 1. 
// person = {name, job, bdate, age, city}
// search and display persons array by age.
// display only those persons whose birthday is today.
// remove all the persons whose are under 18.

// --------- Solution 1-----------

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

// 2.Show if square of number is exists in same array
// Input: [1,2,625,4,99,5,16,25,17,789,20,6,36,100]

// Output: 
// number 1 => squared number 1
// number 2 => squared number 2

// --------- solution 2-----------

// let array = [1, 2, 625, 4, 99, 5, 16, 25, 17, 789, 20, 6, 36, 100];
// let result = array.filter((item, index) => {
//   if (array.includes(item ** 2)) {
//     return item;
//   }
// });
// console.log(array);
// console.log(result);

// ----------------Question 3-----------

// 3. select day from drop down, it'll store days(sunday to saturday), select 2 dates as start date and end date.
// Find selcted day's date between start date to end date.

// ex: selected day from drop down : wednesday.
// start date = 01-02-2022 , end date = 10-02-2022

// output should be: 
// 2 wednesday between 01-02-2022 to 10-02-2022 on  following days: 
// 02-02-2022
// 09-02-2020

// ----------------solution 3-----------

// refer Set1-Question-3.html

// ----------------Question 4-----------

// 4.
// filter palindrom strings from array of strings.

// ----------------solution 4-----------

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

// --------------------------------------Set 2-------------------------------------------

// ----------------Question 1-----------

// 1.
// heros array to return a new array.

// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.

// const heros = [
//   { name: 'Spider-Man' },
//   { name: 'Thor' },
//   { name: 'Black Panther' },
//   { name: 'Captain Marvel' },
//   { name: 'Silver Surfer' }
// ];
// EXPECTED OUTPUT (array of objects): 
// [
//   { id: 0, hero: 'Spider-Man' }, 
//   { id: 1, hero: 'Thor' }, 
//   { id: 2, hero: 'Black Panther' }, 
//   { id: 3, hero: 'Captain Marvel' }, 
//   { id: 4, hero: 'Silver Surfer' }
// ]

// ----------------Solution 1-----------

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

// 2.
// Write a function that, when passed an array and a target sum, returns, efficiently with
// respect to time used, two distinct zero-based indices of any two of the numbers, whose
// sum is equal to the target sum. If there are no two numbers, the function should return
// null. For example, findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10) should return an array containing
// any of the following pairs of indices:
// 0 and 3 (or 3 and 0) as 3 + 7 = 10
// 1 and 5 (or 5 and 1) as 1 + 9 = 10
// 2 and 4 (or 4 and 2) as 5 + 5 = 10

// ----------------Solution 2-----------

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
// let array = [3, 9];
// let sum = 10;
// console.log(check(array, sum));

// -------------------or -------------------

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
// let array = [3, 1, 5, 7, 5, 9];
// sum = 8;
// console.log(check(array, sum));

// ----------------Question 3-----------

// 3.
// Write a function that converts user entered date formatted as M/D/YYYY to a format
// required by an API (YYYYMMDD). The parameter "userDate" and the return value are
// strings. For example, it should convert user entered date "12/31/2014" to "20141231"
// suitable for the API.

// ----------------Solution 3-----------

// function changeFormate(userDate) {
//   let [m, d, y] = userDate.split("/");
//   return y + m + d;
// }
// console.log(changeFormate("12/31/2014"));

// ----------------Question 4-----------

// 4.
// Define a function called cleanNames that accepts an array of strings containing additional space characters at the beginning and end. The cleanNames() function should use the array map method to return a new array full of trimmed names. For example:

// cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]) 
// should give
// ["avengers", "captain_america", "ironman", "black panther"]

// ----------------Solution 4-----------

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

// -------------------------------------------Set 3---------------------------------------

// ----------------Question 1-----------

// 1.
// Create a method in the Person class which returns how another person's age compares. 
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
// return a sentence in the following format:

// {older than / younger than / same age as} me.

// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "elder than me."

// p2.compareAge(p1) ➞ "younger than me"

// p1.compareAge(p3) ➞ "same age as me."

// ----------------Solution 1-----------

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

// 2.
// Consider the following array:
// let nums = [11, 22, 33, 46, 75, 86, 97, 98];

// filter even numbers then square them. Assign the result to a variable named squaredEvenNums and display it. 
// The output should be:
// squaredEvenNums: [484, 2116, 7396, 9604]

// calculate the sum of nums array. The output should be:
// Sum of array elements: 468

// ----------------Solution 2-----------

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

// 3.
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// Examples
// timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

// timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

// timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

// ----------------Solution 3-----------

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

// 4.
// count each words in given paragraph.

// ----------------Solution 4-----------

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