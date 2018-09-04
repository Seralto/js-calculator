describe("Add suite", function() {
  var Calculator = require('../../src/js/calculator');

  it("should return 5 to 2 + 3", function() {
    expect(Calculator.add(2,3)).toEqual(5);
  })

  it("Should return 6 to 9 -3 in text format", function() {
    expect(Calculator.add('9', '-3')).toEqual(6);
  });

  it("should return 4.5 for 1.5 + 3", function() {
    expect(Calculator.add(1.5, 3)).toEqual(4.5);
  });

  it("should return 0 when the first number is undefined", function() {
    expect(Calculator.add(undefined, 3)).toEqual(0);
  });

  it("should return 0 when the second number is undefined", function() {
    expect(Calculator.add(3, undefined)).toEqual(0);
  });
})