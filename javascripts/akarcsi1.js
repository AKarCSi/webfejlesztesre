var gomb, outputContainer;
var counter = 0;
var strUser;

function createNewOutput(msg) {
  var li = document.createElement('li');
	li.innerHTML = msg;
	outputContainer.appendChild(li);
}

function onchange(ev) {
	strUser = gomb.options[gomb.selectedIndex].value;
	createNewOutput(strUser);
}

function setUp() {
	gomb = document.getElementById('radioButton');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('change', onchange);
}

document.addEventListener('DOMContentLoaded', setUp);
