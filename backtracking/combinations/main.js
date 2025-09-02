/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You man return the answer in any order.
 */

const combination = (n, k) => {
  const nums = [...Array(n)].map((_, i) => i + 1);
  const result = [];

  const helper = (nums, bucket, index) => {
    if (bucket.length === k) {
      result.push([...bucket]);
    } else if (index === nums.length) {
      return;
    } else {
      // Pick
      bucket.push(nums[index]);
      helper(nums, bucket, index + 1);

      // Not Pick
      bucket.pop();
      helper(nums, bucket, index + 1);
    }
  };

  helper(nums, [], 0);
  return result;
};

console.log(combination(4, 2));
