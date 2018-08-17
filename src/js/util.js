var num1 = '';
var num2 = '';
var res = '';
var operator = '';
var txtInput = document.getElementById('result');
txtInput.value = '0';

function defineOperator(value) {
    calculate();
    operator = value;
}

function addNumber(number) {
    if (operator === '') {
        num1 = getNumber(number, num1);
    } else {
        num2 = getNumber(number, num2);
    }
}

function getNumber(newNumber, currentNumber) {
    if (currentNumber.length == 10 || (newNumber === '.' && currentNumber.indexOf('.') >= 0)) {
        return;
    }
    if (newNumber === '.' && (txtInput.value === '0' || currentNumber === '')) {
        currentNumber = '0';
    }
    txtInput.value = currentNumber + newNumber;
    return txtInput.value;
}

function clear() {
    num1 = '';
    num2 = '';
    operator = '';
    txtInput.value = '0';
}

function calculate() {
    if (num1 === '' || num2 === '' || operator === '') {
        return;
    }
    var res = '';
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            res = Calculator.add(num1, num2);
            break;
        case '-':
            res = Calculator.subtract(num1, num2);
            break;
        case '/':
            res = Calculator.divide(num1, num2);
            break;
        case '*':
            res = Calculator.multiply(num1, num2);
            break;
    }
    res = res.toString();
    txtInput.value = res.length <= 10 ? res : res.substr(0, 10);
    num1 = txtInput.value;
    num2 = '';
    operator = '';
}
