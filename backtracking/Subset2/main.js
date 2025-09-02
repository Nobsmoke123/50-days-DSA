/**
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order
 */

const subSets = (nums) => {
  const result = [];

  const helper = (bucket, index) => {
    if (index === nums.length) {
      result.push([...bucket]);
    } else {
      // pick
      bucket.push(nums[index]);
      helper(bucket, index + 1);
      // Not pick
      bucket.pop();
      while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
        index++;
      }
      helper(bucket, index + 1);
    }
  };

  helper([], 0);

  return result;
};

console.log(subSets([1, 2, 2]));
