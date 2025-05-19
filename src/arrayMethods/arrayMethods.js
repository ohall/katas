// Hints for practicing built-in JS array and object iteration methods:
// - forEach, map, filter, reduce, find, findIndex, some, every,
//   includes, indexOf, lastIndexOf, concat, slice, splice,
//   sort, join, reverse, flat, flatMap
// - Object.keys, Object.values, Object.entries

/**
 * Returns a new array with squares of each element using forEach.
 */
function squareWithForEach(arr) {
  const retArr = [];
  arr.forEach(item => retArr.push(item * item));
  return retArr;
}

/**
 * Returns a new array with each element doubled using map.
 */
function doubleWithMap(arr) {
  return arr.map(item => (item+item));
}

/**
 * Returns only the even numbers from the array using filter.
 */
function getEvenNumbers(arr) {
  return arr.filter(item => item%2 === 0);
}

/**
 * Returns the sum of all elements using reduce.
 */
function sumArray(arr) {
	return arr.reduce( (sum, item) => sum + item, 0  )
}

/**
 * Finds an object with matching id using find.
 */
function findById(arr, id) {
	return arr.find((item) => item.id === id);
}

/**
 * Finds the index of object with matching id using findIndex.
 */
function findIndexById(arr, id) {
	return arr.findIndex(item =>  item.id === id)
}

/**
 * Returns true if any element is negative using some.
 */
function hasNegative(arr) {
	return arr.some(item => item < 0); 
}

/**
 * Returns true if all elements are positive using every.
 */
function allPositive(arr) {
	return arr.every(item => item >= 0)
}

/**
 * Checks if array includes a given value using includes.
 */
function includesValue(arr, val) {
	return arr.includes(val)
}

/**
 * Returns the first index of a value using indexOf.
 */
function indexOfValue(arr, val) {
	return arr.indexOf(val)
}

/**
 * Returns the last index of a value using lastIndexOf.
 */
function lastIndexOfValue(arr, val) {
	return arr.lastIndexOf(val);
}

/**
 * Concatenates two arrays using concat.
 */
function concatArrays(arr1, arr2) {
	return arr1.concat(arr2);
}

/**
 * Returns a subarray using slice.
 */
function sliceArray(arr, start, end) {
	return arr.slice(start, end);
}

/**
 * Removes elements using splice and returns removed items.
 */
function removeElements(arr, start, deleteCount) {
	return arr.splice(start, deleteCount)
}

/**
 * Returns a sorted copy of the array (ascending) using sort.
 */
function sortNumbers(arr) {
	return arr.sort((a,b) => a-b)
}

/**
 * Joins array of strings using join with a delimiter.
 */
function joinWords(arr, delimiter) {
	return arr.join(delimiter)
}

/**
 * Returns a reversed copy of the array using reverse.
 */
function reverseArray(arr) {
	return arr.reverse()
}

/**
 * Flattens nested arrays one level deep using flat.
 */
function flattenArray(arr) {
  return arr.flat();
}

/**
 * Maps each element to an array [item, item*2] and flattens one level using flatMap.
 */
function duplicateMap(arr) {
  return arr.flatMap(item => [item, item * 2]);
}

/**
 * Returns an array of keys from an object using Object.keys.
 */
function getObjectKeys(obj) {
  return Object.keys(obj);
}

/**
 * Returns an array of values from an object using Object.values.
 */
function getObjectValues(obj) {
	return Object.values(obj);
}

/**
 * Returns an array of [key, value] pairs from an object using Object.entries.
 */
function getObjectEntries(obj) {
	return Object.entries(obj);
}

module.exports = {
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
};