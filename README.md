# JavaScript Code Katas

A collection of code katas with tests to practice TDD and problem-solving.

## Getting Started

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Katas

### 1. FizzBuzz
Write a function that returns:
- "Fizz" for numbers divisible by 3
- "Buzz" for numbers divisible by 5
- "FizzBuzz" for numbers divisible by both 3 and 5
- The number itself for other numbers

### 2. String Calculator
Create a calculator that takes a string and returns the sum of the numbers in the string:
- An empty string returns 0
- A single number returns the value
- Two numbers separated by a comma returns the sum
- Any number of numbers separated by commas returns the sum
- New lines can be used instead of commas

### 3. Roman Numerals
Implement a function that converts numbers to Roman numerals according to the rules of Roman numerals.

### 4. Anagrams
Write a function that detects if two strings are anagrams of each other.

### 5. Palindrome
Write a function that checks if a given string is a palindrome, ignoring spaces, punctuation, and case sensitivity.

## How to Use

1. Choose a kata to work on
2. Run the tests for that kata:
   ```bash
   npx jest src/fizzbuzz/fizzbuzz.test.js --watch
   ```
3. Implement the function to make the tests pass
4. Refactor your solution as needed

## TDD Workflow

1. Red: Write a failing test
2. Green: Write the minimum code to make the test pass
3. Refactor: Improve the code without changing its behavior