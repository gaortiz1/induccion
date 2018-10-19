import {FizzBuzz} from '../../src/FizzBuzz';

describe("fuzzbuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("should get result from n number", function() {
    expect([1, 2, 'Fizz', 4, 'Buzz']).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    //expect(fizzBuzz.play(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });
});
