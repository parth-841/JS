// -------------------------------------------Question----------------------------------
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

// ----------------------------------------Solution-------------------------------------

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