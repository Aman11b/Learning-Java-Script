console.log("Arrow function--->>>");

function greet(username) {
  return `Hello ${username}`;
}
console.log(greet("You"));

greet1 = (username) => {
  return `Hello arrow ${username}`;
};
console.log(greet1("You"));

const double = (n) => n * 2;
console.log(double(4));

// spread operator

console.log("spread operator->>>");
// function
function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
const colors = ["r", "b", "g", "y"];
giveMe4(1, 2, 3, 4);
giveMe4(colors);

giveMe4(...colors);
// array expanded

// arrays
const numbs = [1, 2, 3, 4, 5, 6];
const num1 = [4, 5, 6, 7];
const con1 = [...numbs, ...num1];
console.log(con1);

// object
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// rest operator
console.log("rest operator->>>");
// accept indefinite number of arguments ,as array provide a way to represent variadic function

function user(x, ...data) {
  console.log(x);
  console.log(data);
}
user("1", 2, 3, 4, 5, 6, 7);

// destructure array
console.log("Destructuring ->>>");
// arrays
const test = [1, 2, 3];
const [one, two, three, four] = test;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

let a, b;
[a = 5, b = 8] = [1];
console.log(a);

[a = 5, b = 8] = [];
console.log(a);

// returning from function
function fun23() {
  return [1, 2];
}
let c, d;
[c, d] = fun23();
console.log(c);
console.log(d);

function fun32() {
  return [1, 2, 3];
}
const [e, , f] = fun32();
console.log(e, f);

// assigning the rest of an array to a variable
const [p, ...q] = [1, 2, 3, 4, 5, 6, 7];
console.log(p, q);

// object destructuring
// obj label should be same
const student = { name: "hi", position: "first", roll: 23 };
const { name, position, roll } = student;
console.log(name, position, roll);

const num2 = { x: 100, y: 200 };
const { x: new1, y: new2 } = num2;
console.log(new1, new2);
// console.log(x, y);

// object destructuring and rest
const { r, t, ...rest } = { a: 1, b: 2, d: 4, g: 5, f: 7 };
console.log(a, b, rest);

// function destructuring
const person = {
  name: "hehe",
  age: 20,
  country: "india",
};
function tp({ name, age, country }) {
  console.log(name, age, country);
}
tp(person);

const options = {
  title: "my",
  item: [1, 2],
};
function show({
  title,
  width: w = 100,
  height: h = 200,
  item: [item1, item2],
}) {
  console.log(title, w, h, item1, item2);
}
show(options);

// nested destructuring
const song = [
  { name: "lu", singer: "ho", duration: 23 },
  { name: "lo", singer: "hs", duration: 3 },
  { name: "lp", singer: "hv", duration: 24 },
];
const [, { singer }] = song;
console.log(singer);

// destructuring mixture

// ternary operator
console.log("ternary operator->>");
let pass = 2;
function pk(ps) {
  return ps === 8 ? "Strong" : "weak";
}
console.log(pk(pass));

// for in loop
console.log("fon in loop->>");
let hi = {
  name: "hell",
  age: 12,
  gender: "male",
};

for (let keys in hi) {
  console.log(keys, hi[keys]);
}

let ar = [1, 2, 3, 4, 5, 6, 7];
for (let index in ar) {
  console.log(`${index}:${ar[index]}`);
}

console.log("for of loop ->>");
let pl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let people of pl) {
  console.log(people);
}

const tx = "hellow";
for (const char of tx) {
  console.log(char);
}

// for each helper
console.log("for each->>");
const tata = [1, 2, 3, 4, 5];
tata.forEach((clr) => {
  console.log(clr * 2);
});

// element -> index-> arr (sequence is fixed)
//  no new array is created here
const newT = tata.forEach((number, index, arr) => {
  arr[index] = number * 2;
});
console.log(newT);

// map helper
console.log("map->>>");
// new array is created
const tl = [1, 2, 3, 4, 5, 6];
const fl = tl.map((num) => num * 2);
console.log(fl);
console.log(tl);

// filter
console.log("filter->>");
// conditional filter on array
// call back return true false
const tg = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(tg.filter((num) => num % 2 == 0));

// find
// find  first matched element in array
console.log("find->>");
const fd = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(fd.find((num) => num % 2 == 0));

// every some function
console.log("every->>>");
const pg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(pg.every((b) => b % 11 == 0));
console.log(pg.every((b) => b % 1 == 0));
console.log(pg.some((b) => b % 3 == 0));

// reduce
console.log("reduce->>");
const pr = [1, 2, 3, 4, 5];
const sum = pr.reduce((p, c) => {
  console.log(`Previous : ${p}`);
  console.log(`Current : ${c}`);
  console.log(`Sum : ${p + c}`);
  return p + c;
}, 1);
// previous value
// current value
console.log(sum);

// map
console.log("map ->>");
// map like object but here key any be of any data type also maintain insertion order

const mp = new Map();
console.log(mp);

const key1 = "str1";
const key2 = {};
const key3 = function () {};

mp.set(key1, "value");
console.log(mp);
mp.set(key3, "value 3");
mp.set(key2, "value 2");
console.log(mp);

console.log(mp.keys());
console.log(mp.values());
console.log(mp.delete(key3));
console.log(mp.keys());
console.log(mp.size);
mp.set(key3, "value 3");

for (let [key, value] of mp) {
  console.log(`${key}->-${value}`);
}

for (let key of mp.keys()) {
  console.log(`key: ${key}`);
}
for (let value of mp.values()) {
  console.log(`values: ${value}`);
}

// set
// only unique
console.log("Set -->>");
const myst = new Set();
console.log(myst);
myst.add(1);
myst.add(2);
myst.add(2);
myst.add(3);
myst.add(15);
console.log(myst);
console.log(myst.has(15));
myst.delete(15);
console.log(myst.has(15));
myst.add(15);
myst.clear();
console.log(myst);

const mys1 = new Set([1, 2, 3, 3, 3, 3, 4, 45, 6]);
console.log(mys1);

for (let item of myst) {
  console.log(item);
}
