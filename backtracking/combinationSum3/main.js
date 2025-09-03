/**
 * Find all valid combinations of K numbers that sum up to n such that the following conditions are true:
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations.
 * The list must not contain the same combination twice, and the combination may be returned in any order
 */

const combination = (k, n) => {
  const nums = [...Array(9)].map((_, i) => i + 1);
  const result = [];
  const length = nums.length;
  const helper = (bucket, index, sum) => {
    if (bucket.length === k && sum === n) {
      result.push([...bucket]);
      return;
    } else if (sum > n || bucket.length > k || index > length - 1) {
      return;
    } else {
      const hash = {};
      for (let i = index; i < length; i++) {
        if (hash[nums[i]] === undefined) {
          bucket.push(nums[i]);
          helper(bucket, i + 1, sum + nums[i]);
          bucket.pop();
        }
      }
    }
  };
  helper([], 0, 0);
  return result;
};

console.log(combination(3, 14));
