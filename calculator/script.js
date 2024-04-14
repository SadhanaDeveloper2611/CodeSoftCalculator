let display = document.getElementById('display');
let input = '';

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', function() {
    const value = this.textContent;
    
    if (value === 'Clear') {
      clearDisplay();
    } else if (value === 'Back') {
      backspace();
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/','%'].includes(value)) {
      operatorClicked(value);
    } else {
      addToDisplay(value);
    }
  });
});

function addToDisplay(value) {
  input += value;
  display.textContent = input;
}

function operatorClicked(operator) {
  input += ' ' + operator + ' ';
  display.textContent = input;
}

function clearDisplay() {
  input = '';
  display.textContent = '0';
}

function backspace() {
  input = input.slice(0, -1);
  display.textContent = input;
}

function calculate() {
  try {
    input = eval(input);
    display.textContent = input;
  } catch (error) {
    display.textContent = 'Error';
  }
}
