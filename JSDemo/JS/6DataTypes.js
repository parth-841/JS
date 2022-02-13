// Primitive Types: string, number, boolean, bigint, symbol, null, undefined
//Array, Map, Object, Set

// Numbers
let n = 1000000000;
n = 1_000_000_000;
console.log(n);
console.log(1e5);
console.log(1e-5);
console.log(0b1000);
console.log(0xff);
console.log(0o377);

// Methods
n = 1234.25162;
console.log("toString():", n.toString());
console.log("toFixed():", n.toFixed(1));
console.log("toPrecision():", n.toPrecision(2));
console.log("toExponential():", n.toExponential(2));
console.log("\n");

//Math
console.log("Math:");
n = 1234.65162;
n1 = [1, 3, 2, 5, 4];
console.log("ceil:", Math.ceil(n));
console.log("floor:", Math.floor(n));
console.log("round:", Math.round(n));
console.log("trunc:", Math.trunc(n));
console.log("max:", Math.max(...n1));
console.log("min:", Math.min(...n1));
console.log("pow:", Math.pow(2, 3));
console.log("\n");

// random
console.log("Math.random():");
let rand = Math.random();
console.log("random:", rand);
console.log("random between 50 to 100:", rand * 50 + 50);
console.log("\n");

// functions
console.log("functions:");
n = "1234.25.35ags";
n1 = 122.13;
console.log(parseInt(n));
console.log(parseFloat(n));
console.log(isFinite(n1));
console.log(isNaN(n));
console.log("\n");

// String
console.log("String:");
let str = "This is my string This";
console.log("1:", str.length);
console.log("2:", str.charAt(1));
console.log("3:", str.charCodeAt(1));
console.log("4:", str.startsWith("This"));
console.log("5:", str.endsWith("This"));
console.log("6:", String.fromCharCode(104));
console.log("7:", str.includes("This"));
console.log("8:", str.match("s"));
console.log("9:", str.search("s"));
console.log("10:", str.split(" "));
console.log("11:", str.substring(1, 6));
console.log("12:", str.substr(1, 6));
console.log("13:", str.toUpperCase());
console.log("14:", str.toLowerCase());
