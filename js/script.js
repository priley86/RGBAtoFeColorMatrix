// Discover what the value on the input is
// Divide that value by 255.
// Make the number with 2 decimals

function parseInput(id) {
  var element = document.getElementById(id);
  var value = element.value / 255;
  value = Math.round(value*100) / 100;
  return value;
}

function getInputValue(id) {
  var element = document.getElementById(id);
  var value = element.value / 255;
  value = Math.round(value*100) / 100;
  return inputvalue;
}

// Apply the value to the color matrix preview.
function rgbValues() {
  var rValue = parseInput('rValue');
  var gValue = parseInput('gValue');
  var bValue = parseInput('bValue');
  var aValue = document.getElementById('aValue').value;

  document.getElementById("rMatrix").innerText = rValue;
  document.getElementById("gMatrix").innerHTML = gValue;
  document.getElementById("bMatrix").innerHTML = bValue;
  document.getElementById("aMatrix").innerHTML = aValue;

  return [rValue, gValue, bValue, aValue];
}

window.onchange = function changeValue(){
  var values = rgbValues();
  console.log(values);
  
  document.querySelector('rgba-matrix').setMatrix(values);

  document.getElementById('selectedColor').style.backgroundColor = 'rgba(' + document.getElementById('rValue').value + ',' + document.getElementById('gValue').value + ',' + document.getElementById('bValue').value + ',' + document.getElementById('aValue').value + ')';
};


//note, you can also expose attributes to individual values like this, as our element props are observed
document.querySelector('rgba-matrix').r = 1;
document.querySelector('rgba-matrix').g = 1;
document.querySelector('rgba-matrix').b = 1;
document.querySelector('rgba-matrix').a = 1;

// TODO: Create a js library.

// document.getElementsByTagName("feColorMatrix")[0].getAttribute("type");
