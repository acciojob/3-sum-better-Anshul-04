function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  // Iterate over the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // Check if the current sum is closer to the target than the closest sum found so far
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // If the sum is equal to the target, return the target
        return target;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
