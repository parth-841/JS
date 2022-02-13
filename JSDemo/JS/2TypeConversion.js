// alert, prompt, confirm

// String conversion
console.log("String conversion:");
let bool = true;
console.log(bool, typeof bool);
bool = String(bool);
console.log(bool, typeof bool);
console.log("\n");

// Number Conversion
console.log("Number Conversion:");
let str = "123";
let num = Number(str);
console.log(num, typeof num);
console.log("6" / "2");
console.log("6" * "2");
console.log("6" - "2");
console.log("6" + "2"); // it will not converted to number
console.log(Number("    123    "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));
console.log(+true, typeof +true);
console.log(+"", typeof +"");
console.log("\n");

// Boolean Conversation
console.log("Boolean Conversation:");
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log("\n");

// Basic Operators

// Unary
console.log("Unary Operator:");
let a = 5;
a = -a;
console.log(a);
console.log("\n");

// Arithmatic Operations
console.log("Arithmatic Operations");
console.log(2 + 5);
console.log(2 - 5);
console.log(2 * 5);
console.log(2 / 5);
console.log(8 ** (1 / 3));
console.log(8 % 3);
console.log("\n");

//String Concatination
console.log("String Concationation:");
console.log("my name is" + "Parth");
console.log("1" + 2);
console.log(2 + 2 + "1");
console.log("\n");

// assignment
console.log("=, +=, -=, *=, /=, d++, d--, ++d, --d");
let d = 1;
console.log((d += 1));
console.log((d -= 1));
console.log((d *= 5));
console.log((d /= 5));
console.log(d++, d);
console.log(d--, d);
console.log(++d, d);
console.log(--d, d);
