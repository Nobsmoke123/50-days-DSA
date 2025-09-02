/**
 * Given an array of distinct interger candidates and a target integer target, return a list of all
 * unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * You will not be given an empty candiates array.
 * It is also given that all the integers in the candidates array are non-negative.
 */

const combinationSum = (nums, target) => {
  const result = [];

  const sum = (values) => values.reduce((acc, value) => acc + value, 0);

  const helper = (bucket, pointer) => {
    const bucketSum = sum(bucket);
    if (bucketSum === target) {
      result.push([...bucket]);
      return;
    } else if (bucketSum > target) {
      return;
    } else {
      for (let index = pointer; index < nums.length; index++) {
        bucket.push(nums[index]);
        helper(bucket, index);
        bucket.pop();
      }
    }
  };

  helper([], 0);
  return result;
};

console.log(combinationSum([2, 3, 8, 9], 9));
