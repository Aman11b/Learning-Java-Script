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
