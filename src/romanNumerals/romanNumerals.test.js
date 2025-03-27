const toRoman = require('./romanNumerals');

describe('Roman Numerals Converter', () => {
  test('should convert single digit numbers', () => {
    expect(toRoman(1)).toBe('I');
    expect(toRoman(2)).toBe('II');
    expect(toRoman(3)).toBe('III');
    expect(toRoman(4)).toBe('IV');
    expect(toRoman(5)).toBe('V');
    expect(toRoman(9)).toBe('IX');
  });

  test('should convert tens', () => {
    expect(toRoman(10)).toBe('X');
    expect(toRoman(14)).toBe('XIV');
    expect(toRoman(19)).toBe('XIX');
    expect(toRoman(24)).toBe('XXIV');
    expect(toRoman(40)).toBe('XL');
    expect(toRoman(49)).toBe('XLIX');
    expect(toRoman(50)).toBe('L');
    expect(toRoman(90)).toBe('XC');
  });

  test('should convert hundreds', () => {
    expect(toRoman(100)).toBe('C');
    expect(toRoman(400)).toBe('CD');
    expect(toRoman(500)).toBe('D');
    expect(toRoman(900)).toBe('CM');
  });

  test('should convert thousands', () => {
    expect(toRoman(1000)).toBe('M');
    expect(toRoman(1984)).toBe('MCMLXXXIV');
    expect(toRoman(2023)).toBe('MMXXIII');
  });
});