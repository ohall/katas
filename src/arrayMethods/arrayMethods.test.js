const {
  squareWithForEach,
  doubleWithMap,
  getEvenNumbers,
  sumArray,
  findById,
  findIndexById,
  hasNegative,
  allPositive,
  includesValue,
  indexOfValue,
  lastIndexOfValue,
  concatArrays,
  sliceArray,
  removeElements,
  sortNumbers,
  joinWords,
  reverseArray,
  flattenArray,
  duplicateMap,
  getObjectKeys,
  getObjectValues,
  getObjectEntries,
} = require('./arrayMethods');

test('squareWithForEach squares each element', () => {
  expect(squareWithForEach([1, 2, 3])).toEqual([1, 4, 9]);
  expect(squareWithForEach([])).toEqual([]);
});

test('doubleWithMap doubles each element', () => {
  expect(doubleWithMap([1, 2, 3])).toEqual([2, 4, 6]);
  expect(doubleWithMap([])).toEqual([]);
});

test('getEvenNumbers filters even values', () => {
  expect(getEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
  expect(getEvenNumbers([1, 3, 5])).toEqual([]);
});

test('sumArray sums all values', () => {
  expect(sumArray([1, 2, 3, 4])).toBe(10);
  expect(sumArray([])).toBe(0);
});

test('findById finds correct object or undefined', () => {
  const items = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
  expect(findById(items, 2)).toEqual({ id: 2, name: 'b' });
  expect(findById(items, 3)).toBeUndefined();
});

test('findIndexById finds correct index or -1', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  expect(findIndexById(items, 2)).toBe(1);
  expect(findIndexById(items, 5)).toBe(-1);
});

test('hasNegative detects negative values', () => {
  expect(hasNegative([1, -1, 2])).toBe(true);
  expect(hasNegative([1, 2, 3])).toBe(false);
});

test('allPositive checks all values are positive', () => {
  expect(allPositive([1, 2, 3])).toBe(true);
  expect(allPositive([1, -2, 3])).toBe(false);
});

test('includesValue checks inclusion', () => {
  expect(includesValue([1, 2, 3], 2)).toBe(true);
  expect(includesValue([1, 2, 3], 4)).toBe(false);
});

test('indexOfValue finds first index or -1', () => {
  expect(indexOfValue([1, 2, 2, 3], 2)).toBe(1);
  expect(indexOfValue([1, 2, 3], 4)).toBe(-1);
});

test('lastIndexOfValue finds last index or -1', () => {
  expect(lastIndexOfValue([1, 2, 2, 3], 2)).toBe(2);
  expect(lastIndexOfValue([1, 2, 3], 4)).toBe(-1);
});

test('concatArrays merges two arrays', () => {
  expect(concatArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  expect(concatArrays([], [1])).toEqual([1]);
});

test('sliceArray returns subarray', () => {
  expect(sliceArray([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
  expect(sliceArray([1, 2, 3], 0, 2)).toEqual([1, 2]);
});

test('removeElements splices array and returns removed items', () => {
  const arr = [1, 2, 3, 4];
  const removed = removeElements(arr, 1, 2);
  expect(removed).toEqual([2, 3]);
  expect(arr).toEqual([1, 4]);
});

test('sortNumbers returns sorted copy', () => {
  expect(sortNumbers([3, 1, 2])).toEqual([1, 2, 3]);
  expect(sortNumbers([10, -1, 5])).toEqual([-1, 5, 10]);
});

test('joinWords joins with delimiter', () => {
  expect(joinWords(['a', 'b', 'c'], '-')).toBe('a-b-c');
  expect(joinWords([], ',')).toBe('');
});

test('reverseArray returns reversed copy', () => {
  expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  expect(reverseArray([])).toEqual([]);
});

test('flattenArray flattens one level', () => {
  expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  expect(flattenArray([1, [2, [3]], 4])).toEqual([1, 2, [3], 4]);
});

test('duplicateMap flatMaps each to [item, item*2]', () => {
  expect(duplicateMap([1, 2, 3])).toEqual([1, 2, 2, 4, 3, 6]);
  expect(duplicateMap([])).toEqual([]);
});

test('getObjectKeys returns object keys', () => {
  expect(getObjectKeys({ a: 1, b: 2 })).toEqual(['a', 'b']);
});

test('getObjectValues returns object values', () => {
  expect(getObjectValues({ a: 1, b: 2 })).toEqual([1, 2]);
});

test('getObjectEntries returns [key, value] pairs', () => {
  expect(getObjectEntries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
});