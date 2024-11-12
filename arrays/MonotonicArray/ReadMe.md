# Monotonic Array

## Question

An array is monotonic if it is either monotone increasing or monotone descreasing. An array is monotone increasing if all it's elemets from left to right are non-descreasing. An array is monotone decreasing if all its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

## Clarifying questions

- Is an empty array monotonic? Yes
- Is an array with one element only monotonic? Yes

## Test cases

- [3,3,4,5,7,8] - true because it's monotone Increasing
- [6,5,4,4,3,1] - true because it's monotone decreasing
- [1,2,3,4,5,3] - false
