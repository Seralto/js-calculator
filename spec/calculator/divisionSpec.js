describe("Division", function() {
  var Calculator = require("../../src/js/calculator");

  it("should return 6 for 12 and 2", function() {
    expect(Calculator.divide(12, 2)).toEqual(6);
  });

  it("should return 3 for 9 and 3 in text format", function() {
    expect(Calculator.divide('9', '3')).toEqual(3);
  });

  it("should return 1.5 for 4.5 and 3", function() {
    expect(Calculator.divide(4.5, 3)).toEqual(1.5);
  });

  it("should return error on division by zero", function() {
    expect(Calculator.divide(10, 0)).toEqual('Error, division by zero');
    expect(Calculator.divide(10, '0')).toEqual('Error, division by zero');
  });

  it("should return 0 when the first number is undefined", function() {
    expect(Calculator.divide(undefined, 3)).toEqual(0);
  });

  it("should return 0 when the second number is undefined", function() {
    expect(Calculator.divide(3, undefined)).toEqual(0);
  });
});