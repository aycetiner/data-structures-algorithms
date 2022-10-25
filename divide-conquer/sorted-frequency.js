function sortedFrequency(arr, num) {
  let first = findFirstNum(arr, num);
  if (first == -1) return first;
  let last = findLastNum(arr, num);
  return last - first + 1;

  function findFirstNum(arr, num, l = 0, r = arr.length - 1) {
    if (r >= l) {
      let mid = Math.floor((l + r) / 2);
      if (mid === 0 || (arr[mid] === num && arr[mid - 1] < num)) {
        return mid;
      }

      if (arr[mid] < num) {
        return findFirstNum(arr, num, mid + 1, r);
      } else {
        return findFirstNum(arr, num, l, mid - 1);
      }
    }
    return -1;
  }

  function findLastNum(arr, num, l = 0, r = arr.length - 1) {
    let mid = Math.floor((l + r) / 2);
    if (r >= l) {
      if (mid === arr.length - 1 || (arr[mid] === num && arr[mid + 1] > num)) {
        return mid;
      }

      if (arr[mid] <= num) {
        return findLastNum(arr, num, mid + 1, r);
      } else {
        return findLastNum(arr, num, l, mid - 1);
      }
    }
  }
}

module.exports = sortedFrequency;
