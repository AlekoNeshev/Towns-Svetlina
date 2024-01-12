

$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

document.addEventListener("DOMContentLoaded", function() {
	
	document.getElementById("btnAdd").addEventListener("click", addTown);
	});


function deleteTown() {
	let townName = document.getElementById("townName").value;
	document.getElementById("townName").value = "";
	let removed = false;
	let options = document.querySelectorAll("#towns option");
	for (let i = 0; i < options.length; i++) {
	  if (options[i].textContent == townName) {
		removed = true;
		options[i].remove();
	  }
	}
	if (removed) showMessage(townName + " deleted.");
	else showMessage(townName + " not found.");
}

  
function showMessage(msg) {
	let resultElement = document.getElementById("result");
	resultElement.textContent = msg;
	resultElement.style.display = "block";
	setTimeout(function () {
	  resultElement.style.display = "none";
	}, 3000);
}


function shuffleTowns() {
	let towns = Array.from(document.querySelectorAll("#towns option"));
	document.getElementById("towns").innerHTML = "";
	shuffleArray(towns);
	towns.forEach(function (town) {
		document.getElementById("towns").appendChild(town);
	});
	showMessage("Towns shuffled");

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let oldElement = array[i];
			array[i] = array[j];
			array[j] = oldElement;
		}
	}
}


document.addEventListener("DOMContentLoaded", function () {

	document.getElementById("btnShuffle").addEventListener("click", shuffleTowns);
});

function addTown() {
	let townName = document.getElementById("townNameForAdd").value;
	if (townName != "") {
		document.getElementById("townNameForAdd").value = "";
let option = document.createElement("option");
option.textContent = townName;
document.getElementById("towns").appendChild(option);
showMessage(townName + " added.");
}
}




