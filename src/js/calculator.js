var Calculator = {
  ADDITION: '+',
  SUBTRACTION: '-',
  DIVISION: '/',
  MULTIPLICATION: '*',

  add: function(num1, num2) {
    return Calculator.calculate(num1, num2, Calculator.ADDITION)
  },
  subtract: function(num1, num2) {
    return Calculator.calculate(num1, num2, Calculator.SUBTRACTION)
  },
  divide: function(num1, num2) {
    if (num2 == 0) { return 'Error, division by zero'; }
    return Calculator.calculate(num1, num2, Calculator.DIVISION)
  },
  multiply: function(num1, num2) {
    return Calculator.calculate(num1, num2, Calculator.MULTIPLICATION)
  },
  
  calculate: function(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) { return 0 }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch(operator) {
      case Calculator.ADDITION:
        return result = num1 + num2;
      case Calculator.SUBTRACTION:
        return result = num1 - num2;
      case Calculator.DIVISION:
        return result = num1 / num2;
      case Calculator.MULTIPLICATION:
        return result = num1 * num2;
    }
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Calculator
}

