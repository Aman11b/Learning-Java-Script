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
