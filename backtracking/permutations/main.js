/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 */

// Permutations
const permutations = (arr) => {
  const result = [];
  const permute = (arr, left, right) => {
    if (left === right) {
      result.push(arr.slice());
    } else {
      for (let index = left; index <= right; index++) {
        [arr[left], arr[index]] = [arr[index], arr[left]]; // swap
        permute(arr, left + 1, right);
        [arr[left], arr[index]] = [arr[index], arr[left]]; // Backtrack (swap back)
      }
    }
  };

  permute(arr, 0, arr.length - 1);
  return result;
};

console.log(permutations([1, 2, 3]));
// const numbers = [1, 2, 3];
// console.log(numbers);
// [numbers[0], numbers[1]] = [numbers[1], numbers[0]];
// const [first, second] = numbers;
// console.log("The first, second ", first, second);
// console.log(numbers);
