var Calculator = {
  add: function(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { return 0; }

    return parseFloat(num1) + parseFloat(num2);
  },
  subtract: function(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) { return 0; }

    return num1 - num2;
  },
  divide: function(num1, num2) {
    return 0;
  },
  multiply: function(num1, num2) {
    return 0;
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Calculator
}