// ======Console=======

// alert("hello js");
console.log("hello JS");
// console > object.methods
console.log("string");
console.warn("waring!");
console.table({ name: "hi", age: 20 });
// clg =>console.log
// log => console.log

// ======Variables========
// var let const
let n;
n = "Am name";
console.log(n);

//  let const var
//-> let var value can be changed
// -> const you cant change again

//=====primitive types====
//1. Numbers
let num = 10;
let num1 = 10.1;
console.log(num, typeof num);
console.log(num1, typeof num1);

console.log("2+2 =", 2 + 2);
console.log("2-2 =", 2 - 2);
console.log("2*2 =", 2 * 2);
console.log("2/2 =", 2 / 2);
console.log("2%2 =", 2 % 2);
console.log("2^2 =", 2 ** 2);

let count = 10;
console.log("counter =", count);
count++;
console.log("counter++ =", count);
count--;
console.log("counter-- =", count);

//2.Boolean
let isTrue = true;
console.log(isTrue);
let isNaN = NaN;
console.log(isNaN);

// falsy value -> false, null, undefined, 0, -0, NaN, "", ''. ``, (empty quotes)

// null set by programmer
// undefined set by JScompiler

// comparison operator
// -> relational operator
// > ,<,>=,<=

// -> equality operator
// === strict equality (type and value)
// !== strict non equality (type and value)
// == loose equality (value)
// != loose equality (value)

// string "" '' ``
let na = "Aman";
let ls = "singh";

console.log("string", na);

console.log(`My name is ${na}`);
console.log(`Full name ${na + ls}`);

// concatination
let ful = na.concat(ls);
console.log(`Concat=> ${ful}`);

// Append
let ful1 = ful + " doing something";
console.log(`Append=> ${ful1}`);

// length
console.log(`Length=> ${ful1.length}`);

// cases
console.log(`Lower case=> ${ful1.toLowerCase()}`);
console.log(`Upper case=> ${ful1.toUpperCase()}`);

// slice
console.log(`Slice=> ${ful1.slice(2, 5)}`);

// split and join
console.log(`Split=> ${ful1.split("")}`);
console.log(`Join=> ${ful1.split("").join("-")}`);

// include
console.log(`includes=> ${ful1.includes("s")}`);

// Trim
var nen = "    adsda  asdasd     ";
console.log(`Trim=> ${nen.trim()}`);
