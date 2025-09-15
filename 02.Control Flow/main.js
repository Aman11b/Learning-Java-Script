console.log("CONTROL FLOW");

// if else
console.log("if else");
let a = 20;
let b = 10;
if (a > b) {
  console.log("a > b");
} else if (a == b) {
  console.log(" a = b");
} else {
  console.log("b < a");
}

// switch statement
console.log("switch");

let x = 2;
switch (x) {
  case 0:
    console.log("its 0");
    break;
  case 1:
    console.log("its non 0");
    break;
  default:
    console.log("not 0,1");
}

// for loop
console.log("for loop");
for (let i = 0; i < 4; i++) {
  console.log(i);
}

// nested for loop
console.log("nested for loop");
for (let i = 1; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(`${i} and ${j}`);
  }
}

// while loop
console.log("while loop");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while loop
console.log("do while loop");
let j = 6;
do {
  console.log(j);
  j++;
} while (j <= 5);

// logical operator
console.log("logical operator");
console.log(true && true);
console.log(false || true);
console.log(!true);

console.log("Arrays-->>>>>");

// Arrays -> 0 index based

// empty array
const empty = [];
console.log(empty);

const num = [1, 2, 3, 4, 5];
const nums = [3, 4, 5, 6];
console.log(num);

const strings = ["m", "a", "d", "r"];
console.log(strings);

// accessing items
console.log(num[4]);

// nested array
const nested = [1, 2, 3, [2, 3, 4], 5];
console.log(nested[3]);

// array methods
// push
num.push(8);
console.log(num);

num.pop();
console.log(num);

// shift-> delete from start
console.log(num);
num.shift();
console.log(num);

// unshift-> add at start
num.unshift(1);
console.log(num);

//concat
const conc = num.concat(nums);
console.log(conc);

// includes
console.log(num.includes(1));

// join
console.log(num.join("-"));

// revert
console.log(num.reverse());
num.reverse();

// slice
console.log(num.slice(0, 2));

// sort
num.reverse();
console.log(num.sort());

// OBJECTS -> {'label':value}
console.log("Objects->>>>>>");

const per = {
  h: 1,
  b: "two",
  d: [1, 2, 3, 4, 5],
  e: true,
};
per.g = [1, 2, 3, 4];
console.log(per);
console.log(typeof per);

// accessing items from object
console.log(per.d);
console.log(per.h);

console.log(per["g"]);
delete per.g;
console.log(per["g"]);

// functions
console.log("functions->>>>");

// function declaration
function fun1() {
  console.log(" this is fun1");
}
fun1();

function fun2(string) {
  console.log(`I am ${string}.`);
}
fun2("He");

// return in function
function fun3(a, b) {
  const c = a + b;
  return c;
}
console.log(fun3(2, 3));

// callback function-> function as argument
function func4(fun4) {
  const value = 10;
  fun4(4);
}
func4(function (value) {
  console.log(value * 3);
});

// global scope-> declared outside block
// local-> declared inside block

// method -> reference of function in object
console.log("methods->>>>");
function func5() {
  return `hi ${person.nam}. live ${person.loc}`;
}
const person = {
  nam: "rahu",
  loc: "heheu",
  func5,
};
console.log(person.func5());

const obj1 = {
  a: "fe",
  b: 5,
  greet: function () {
    return `${obj1.a}=>${obj1.b}`;
  },
};
console.log(obj1.greet());
