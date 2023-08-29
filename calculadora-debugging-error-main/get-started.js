function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: Uno o los dos inputs están vacíos.';
    return;
  }
  if(notAnumber()){
    label.textContent = "Error: Uno o los dos campos tienen caracteres de texto o invalidos";
    return;
  }
  updateLabel();
}

function notAnumber(){
  if(isNaN(getNumber1()) || isNaN(getNumber2())){
    return true;
  }
  else{
    return false;
  }
}

function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = parseFloat(getNumber1());
  var addend2 = parseFloat(getNumber2());
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
