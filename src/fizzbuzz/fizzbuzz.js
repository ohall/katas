/**
 * FizzBuzz Kata
 * 
 * Write a function that returns:
 * - "Fizz" for numbers divisible by 3
 * - "Buzz" for numbers divisible by 5
 * - "FizzBuzz" for numbers divisible by both 3 and 5
 * - The number itself for other numbers
 */

function fizzbuzz(number) {
  if (number % 3 === 0 &&  number % 5 === 0 ) {
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }

  if (number % 5 === 0) {
    return "Buzz"
  }

  return number
}

module.exports = fizzbuzz;