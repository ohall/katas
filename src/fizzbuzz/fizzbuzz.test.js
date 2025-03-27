const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
  test('should return the number for numbers not divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });

  test('should return Fizz for numbers divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
  });

  test('should return Buzz for numbers divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
  });

  test('should return FizzBuzz for numbers divisible by both 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
    expect(fizzbuzz(45)).toBe('FizzBuzz');
  });
});