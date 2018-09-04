describe("Multiply", function() {
  var Calculator = require("../../src/js/calculator");

  it("should return 6 for 2 and 3", function() {
    expect(Calculator.multiply(2, 3)).toEqual(6);
  });

  it("should return 9 for 3 and 3 in text format", function() {
    expect(Calculator.multiply('3', '3')).toEqual(9);
  });

  it("should return 4.5 for 1.5 and 3", function() {
    expect(Calculator.multiply(1.5, 3)).toEqual(4.5);
  });

  it("should return 0 when the first number is undefined", function() {
    expect(Calculator.multiply(undefined, 3)).toEqual(0);
  });

  it("should return 0 when the second number is undefined", function() {
    expect(Calculator.multiply(3, undefined)).toEqual(0);
  });
});