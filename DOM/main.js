console.log("dom->>");
console.log(document);
console.dir(document);
console.log(document.head);
console.log(document.body);
// console.log(document.body.innerHTML);
console.log(document.documentURI);

// accessing DOM
console.log("Accessing DOM =>>");
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

console.log(document.getElementById("main"));
console.log(document.getElementById("main").innerHTML);

console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("cls").length);

console.log(document.getElementsByClassName("cls-1"));

console.log(document.querySelector(".cls-1"));
console.log(document.querySelector(".cls-1").innerHTML);

console.log(document.querySelector("#id-1"));
console.log(document.querySelector("#id-1").innerHTML);

console.log(document.querySelectorAll("li"));

// variables
console.log("VARIABLES=>>");
const h1 = document.querySelector("h1");
console.log(h1.innerHTML);

// inner text
console.log("INNER TEXT ->>");
// text content
console.log("TEXT CONTENT ->>");
// innerHtml
console.log("INNER HTML ->>");
