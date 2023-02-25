function convert() {
  var inputValue = document.getElementById('inputValue').value;
  var unitSelect = document.getElementById('unitSelect').value;
  var result;

  if (unitSelect === 'kgToPound') {
    result = inputValue * 2.20462;
  } else {
    result = inputValue * 0.453592;
  }

  document.getElementById('result').innerHTML = result;
}
