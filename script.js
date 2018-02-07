let displayInput = '';
let total = '';

const smallWindow = document.querySelector('.window-display.small');
const largeWindow = document.querySelector('.window-display.large');
const values = document.getElementsByClassName('btn');

Array.from(values).forEach(element => {
  element.addEventListener('click', getValue)
});

function getValue() {
  switch (true) {
    case this.value == '=':
      (total == '')
        ? this.value
        : displayInput = total;
      smallWindow.innerHTML = '';
      break;
    case this.value == 'AC':
      total = '';
      displayInput = total;
      smallWindow.innerHTML = displayInput;
      break;
    case this.value == 'CE':
      displayInput = '';
      break;
    case this.value == '%':
      total = (parseFloat(displayInput) * 0.01).toFixed(2);
      displayInput += this.value;
      smallWindow.innerHTML = total;
      break;
    default:
      displayInput += this.value;
      break;
  }
  largeWindow.innerHTML = displayInput;
  let numOperatorNum = RegExp(/^(\d*\.?\d*[\+\-\*\/]{1})+\d*\.?\d*$/, 'g');

  if (numOperatorNum.test(displayInput)) {
    total = eval(displayInput);
    smallWindow.innerHTML = total;
  }

}
