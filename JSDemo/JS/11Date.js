// date
let date = new Date();
console.log(date);

date = new Date(2022, 0, 29, 06, 09, 55);
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(Date.now()); //Milliseconds from 1 JAN 1970
