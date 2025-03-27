const stringCalculator = require('./stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  test('should return the number for a single number string', () => {
    expect(stringCalculator('1')).toBe(1);
    expect(stringCalculator('42')).toBe(42);
  });

  test('should return the sum for two numbers separated by comma', () => {
    expect(stringCalculator('1,2')).toBe(3);
    expect(stringCalculator('10,20')).toBe(30);
  });

  test('should return the sum for multiple numbers separated by commas', () => {
    expect(stringCalculator('1,2,3')).toBe(6);
    expect(stringCalculator('1,2,3,4,5')).toBe(15);
  });

  test('should handle new lines as separators', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
    expect(stringCalculator('1,2\n3')).toBe(6);
  });
});