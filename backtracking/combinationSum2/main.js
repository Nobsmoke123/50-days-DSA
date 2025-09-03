/**
 * Given a collection of candiate numbers (candidates) and a target number (target),
 * find all the unique combinations in candidates where the candidate numbers sum to target.
 * Each number in the candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations
 */

const combination = (nums, target) => {
  const result = [];
  const length = nums.length;

  const sum = (values) => values.reduce((acc, value) => acc + value, 0);
  const hash = {};
  const helper = (bucket, index) => {
    const bucketSum = sum(bucket);
    if (bucketSum === target) {
      result.push([...bucket]);
      return;
    } else if (bucketSum > target || index > length - 1) {
      return;
    } else {
      for (let i = index; i < length; i++) {
        if (hash[nums[i]] === undefined) {
          hash[nums[i]] = true;
          bucket.push(nums[i]);
          helper(bucket, i + 1);
          bucket.pop();
        }
      }
    }
  };

  nums.sort((a, b) => a - b);

  helper([], 0);
  //   const hash = {};
  //   return result.filter((candidate) => {
  //     if (hash[candidate.join()] === undefined) {
  //       hash[candidate.join()] = 1;
  //       return candidate;
  //     }
  //   });
  return result;
};

// console.log(combination([3, 5, 2, 1, 3], 7));
console.log(combination([1, 1, 1, 1, 2, 2], 4));
