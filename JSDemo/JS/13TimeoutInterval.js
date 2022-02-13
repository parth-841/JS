// Timeout

let timeout = setTimeout(() => {
  console.log("Message after 1 second");
}, 1000);
// clearTimeout(timeout); timeout will not executed

// Interval
let interval = setInterval(() => {
  let date = new Date();
  console.log(
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
}, 1000);
setTimeout(() => {
  clearInterval(interval);
}, 3000);
