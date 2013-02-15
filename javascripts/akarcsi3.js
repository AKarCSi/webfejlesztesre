/*global document*/
var myHandler2 = (function () {
  "use strict";
  var gombP, outputContainerP;
  var strUserP;

  function createNewOutput(msg) {
    var li = document.createElement('li');
    li.innerHTML = msg;
    outputContainer.appendChild(li);
  }

  function onClick() {
  strUserP = gombP.options[gombP.selectedIndex].value;
    createNewOutput(strUserP);
  }

  function setUp() {
    gombP = document.getElementById('radioButtonForPrivate');
    outputContainerP = document.getElementById('output');
    gombP.addEventListener('change', onClick);
  }
  return setUp;
})();

document.addEventListener('DOMContentLoaded', myHandler2);
