describe("Subtract", function() {
  var Calculator = require("../../src/js/calculator");

  it("should return 7 for 10 and 3", function() {
    expect(Calculator.subtract(10, 3)).toEqual(7);
  });

  it("should return 5 for 6 and 1 in text format", function() {
    expect(Calculator.subtract('6', '1')).toEqual(5);
  });

  it("should return 3.5 for 6 and 2.5", function() {
    expect(Calculator.subtract(6, 2.5)).toEqual(3.5);
    expect(Calculator.subtract('6', '2.5')).toEqual(3.5);
  });

  it("should return 0 when the first number is undefined", function() {
    expect(Calculator.add(undefined, 3)).toEqual(0);
  });

  it("should return 0 when the second number is undefined", function() {
    expect(Calculator.add(3, undefined)).toEqual(0);
  });
});