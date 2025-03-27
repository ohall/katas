const areAnagrams = require('./anagrams');

describe('Anagrams Detector', () => {
  test('should return true for anagram strings', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true);
    expect(areAnagrams('triangle', 'integral')).toBe(true);
    expect(areAnagrams('debit card', 'bad credit')).toBe(true);
  });

  test('should return false for non-anagram strings', () => {
    expect(areAnagrams('hello', 'world')).toBe(false);
    expect(areAnagrams('hello', 'hella')).toBe(false);
    expect(areAnagrams('testing', 'testings')).toBe(false);
  });

  test('should handle case insensitivity', () => {
    expect(areAnagrams('Listen', 'Silent')).toBe(true);
    expect(areAnagrams('GARDEN', 'DANGER')).toBe(true);
  });

  test('should handle whitespace', () => {
    expect(areAnagrams('dormitory', 'dirty room')).toBe(true);
    expect(areAnagrams('conversation', 'voices rant on')).toBe(true);
  });
});