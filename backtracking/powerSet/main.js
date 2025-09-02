/**
 * Power Set - Given an integer array of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets.
 * Return the solution in any order
 */

const powerSet = (nums) => {
  const result = [];

  const helper = (bucket, index) => {
    if (index === nums.length) {
      result.push(bucket.slice());
    } else {
      // pick
      bucket.push(nums[index]);
      helper(bucket, index + 1);
      // not pick
      bucket.pop();
      helper(bucket, index + 1);
    }
  };

  helper([], 0);
  return result;
};

console.log(powerSet([1, 2, 3]));

// Space complexity: O(n)
// Time complexity: O (n x 2^n)
