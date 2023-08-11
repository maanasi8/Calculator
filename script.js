const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');

let currentInput = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.value = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += ' ' + button.textContent + ' ';
        display.value = currentInput;
    });
});

calculateButton.addEventListener('click', () => {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = '';
    } catch (error) {
        display.value = 'Error';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});