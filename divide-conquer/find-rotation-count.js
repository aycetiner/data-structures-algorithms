function findRotationCount(nums) {
  if (!nums) {
    return -1;
  }

  let low = 0;
  let high = nums.length - 1;

  while (nums[low] > nums[high]) {
    let mid = Math.floor((low + high) / 2);
    console.log(low, mid, high);
    if (nums[mid - 1] > nums[mid]) {
      return mid;
    }
    if (nums[mid + 1] < nums[mid]) {
      return mid + 1;
    }

    if (nums[low] <= nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return 0;
}

module.exports = findRotationCount;
