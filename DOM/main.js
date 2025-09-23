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
const p = document.querySelector("p");
console.log(p.innerText);
// text content
console.log("TEXT CONTENT ->>");
const q = document.querySelector("p");
console.log(q.textContent);
// innerHtml
console.log("INNER HTML ->>");
const r = document.querySelector("p");
console.log(r.innerHTML);

console.log("add remove toggle->>");
const sel = document.querySelector(".selector");
console.log(sel.innerHTML);
sel.classList.add("style");
sel.classList.remove("style");
sel.classList.toggle("style");

console.log("Attributes->>");

const a = document.querySelector("a");
const inp = document.querySelector("input");
console.log(a.href);
console.log(inp.value);
console.log(inp.type);
a.href = "https://www.youtube.com";
console.log(a.href);
inp.value = "hi";
console.log(inp.value);
console.log(inp.getAttribute("placeholder"));

inp.setAttribute("placeholder", "its placeholder");
console.log(inp.getAttribute("placeholder"));

// siblings
console.log("siblings->>");
const ul = document.querySelector("ul");
console.log(ul.innerHTML);
console.log(ul.innerText);
const li = document.querySelector("li");
console.log(li.parentElement);
console.log(li.nextSibling);
console.log(ul.children);
console.log(ul.children[1].innerHTML);

console.log(li.nextElementSibling);
console.log(li.nextElementSibling.nextElementSibling.textContent);

let forth = document.querySelector(".forth");
console.log(forth.previousElementSibling.previousElementSibling.innerText);
console.log(forth.previousSibling);

console.log("creating element->>");
const newH = document.createElement("h1");
newH.textContent = "I am new";
newH.classList.add("welcome");
newH.classList.remove("welcome");
const body = document.body;
body.appendChild(newH);

const newLi = document.createElement("li");
newLi.textContent = "new li";
ul.appendChild(newLi);

const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

const i = document.createElement("i");
i.innerText = "im italics";
i.style.color = "blue";
p.insertAdjacentElement("beforebegin", i);
p.insertAdjacentElement("beforeend", i);


