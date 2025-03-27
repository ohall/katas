const isPalindrome = require('./palindrome');

describe('Palindrome Checker', () => {
  test('should return true for simple palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('madam')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
  });

  test('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
    expect(isPalindrome('javascript')).toBe(false);
  });

  test('should ignore case', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('Madam')).toBe(true);
    expect(isPalindrome('RaDaR')).toBe(true);
  });

  test('should ignore spaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('nurses run')).toBe(true);
  });

  test('should ignore punctuation', () => {
    expect(isPalindrome('Madam, I\'m Adam.')).toBe(true);
    expect(isPalindrome('A man, a plan, a canal: Panama!')).toBe(true);
  });
});