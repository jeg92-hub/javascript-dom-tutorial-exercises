let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let fourth = document.createElement("li");
	//forth.appendChild(document.createTextNode('Forth element'));
	fourth.innerHTML = "Fourth element";
	let myListElement = document.querySelector("#myList")
	myListElement.appendChild(fourth);
});
