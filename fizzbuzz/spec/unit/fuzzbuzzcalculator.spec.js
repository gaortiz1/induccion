import {FizzBuzzCalculator} from '../../src/FizzBuzzCalculator';

describe("FizzBuzzCalculator", function() {

  var fizzBuzzCalculator;

  beforeEach(function() {
    fizzBuzzCalculator = new FizzBuzzCalculator();

  });

  it("should get Fizz when is number divisible by three", function() {
    expect(fizzBuzzCalculator.getResult(3)).toEqual('Fizz');
  });

  it("should get Buzz when is number divisible by five", function() {
    expect(fizzBuzzCalculator.getResult(5)).toEqual('Buzz');
  });

  it("should get Fizz Buzz when is number divisible by five and three", function() {
    expect(fizzBuzzCalculator.getResult(15)).toEqual('Fizz Buzz');
  });

  it("should get Number when is not Fizz, Buzz or Fizz Buzz", function() {
    expect(fizzBuzzCalculator.getResult(1)).toEqual(1);
  });
});
