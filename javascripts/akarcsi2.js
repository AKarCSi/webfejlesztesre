var myHandler = {
  gomb: null,
	outputContainer: null,
	counter: 0,
	strUser: null,
	createNewOutput: function (msg) {
		var li = document.createElement('li');
		li.innerHTML = msg;
		myHandler.outputContainer.appendChild(li);
	},
	onChange: function() {
		myHandler.strUser = myHandler.gomb.options[myHandler.gomb.selectedIndex].value;
		myHandler.createNewOutput(myHandler.strUser);
	},
	setUp: function() {
		myHandler.gomb = document.getElementById('radioButtonForNamespace');
		myHandler.outputContainer = document.getElementById('output');
		myHandler.gomb.addEventListener('change', myHandler.onChange);
	}
}

document.addEventListener('DOMContentLoaded', myHandler.setUp);
