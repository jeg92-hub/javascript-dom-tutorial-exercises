window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	var mySelect = document.querySelector("#mySelect");
	countries.forEach(function(item){
		var option = document.createElement("option");
		option.appendChild(document.createTextNode(item));
		document.querySelector("#mySelect").appendChild(option);
	})
	mySelect.addEventListener('change', (event) => {
		alert(countries[mySelect.selectedIndex-1])
	})
  
};
