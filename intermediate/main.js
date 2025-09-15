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
