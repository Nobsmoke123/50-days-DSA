/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order
 */

const permuteUnique = (nums) => {
  const result = [];
  const hash = {};

  const permute = (nums, left, right) => {
    if (left === right) {
      result.push(nums.slice());
    } else {
      for (let index = left; index <= right; index++) {
        if (hash[left] !== nums[index]) {
          hash[left] = nums[index];
          [nums[left], nums[index]] = [nums[index], nums[left]]; // swap
          permute(nums, left + 1, right);
          [nums[left], nums[index]] = [nums[index], nums[left]]; // swap back
        }
      }
    }
  };

  permute(nums, 0, nums.length - 1);
  return result;
};

console.log(permuteUnique([1, 1, 2]));

// Space complexity: O(n)
// Time complexity: O(n x n!)
