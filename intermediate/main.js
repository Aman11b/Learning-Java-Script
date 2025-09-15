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
