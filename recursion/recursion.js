/** product: calculate the product of an array of numbers. */

function product(nums) {}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {}

/** everyOther: return a string with every other letter. */

function everyOther(str) {}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0, reversed = "") {
  if (str.length === reversed.length) {
    return str === reversed;
  }
  reversed += str[str.length - 1 - idx];
  return isPalindrome(str, idx + 1, reversed);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reveresed = "") {
  if (str.length === reveresed.length) return reveresed;
  reversed += str[str.length - 1 - idx];
  return revString(str, idx + 1, reversed);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
