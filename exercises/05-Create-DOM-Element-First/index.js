// Your code here
let pElem = document.createElement("p");
let newtext = document.createTextNode("Hello World");
pElem.appendChild(newtext);
pElem.style.backgroundColor = 'yellow';
//elem.innerHTML = 'Hello World';
document.body.appendChild(pElem);