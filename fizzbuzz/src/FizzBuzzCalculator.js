const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZ_BUZZ = "Fizz Buzz";

export class FizzBuzzCalculator {

    getResult(number) {
        return this.isFizz(number) ? this.isBuzz(number) ? FIZZ_BUZZ : FIZZ : this.isBuzz(number) ? BUZZ : number;
    }

    isFizz(number) {
        return number % 3 == 0;
    };

    isBuzz(number) {
        return number % 5 == 0;
    };

}