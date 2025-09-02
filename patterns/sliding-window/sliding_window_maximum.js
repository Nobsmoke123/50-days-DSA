/**
 * 239. Sliding Window Maximum
 *
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 *
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 * Example 2:
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 *
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * 1 <= k <= nums.length
 */

// Slow code
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let currentWindow = [];
  const maxSum = [];

  if (nums.length === 1) {
    return nums;
  }

  // Get initial window sum
  for (let i = 0; i < k; i++) {
    // ----- O(n) time complexity
    currentWindow.push(nums[i]); // ----- O(1) time complexity
  }

  maxSum.push(Math.max(...currentWindow)); // ----- O(n) time complexity since the max function iterates through the current window of length k.

  // Start sliding the window
  for (let i = k; i < nums.length; i++) {
    // ----- O(n) time complexity
    currentWindow.push(nums[i]); // ----- O(1) time complexity
    currentWindow.shift(); // ----- O(k) time complexity
    maxSum.push(Math.max(...currentWindow)); // ----- O(k) time complexity since the max function iterates through the current window of length k.
  }

  return maxSum;
};

// Time complexity: O(n * k);

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
