# Power Sum

## Question

Let's define a peculia type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is never empty. Write a fucntio that will take a peculiar array as it's input and find the sum of it's elements. if an array is an element in the peculiar array you have to convert it to it's equivalent value so that you can sum it with the other elements. Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. For eg. [2,3,[4,1,2]] = 2 + 3 +(4+1+2)^2
[1,2,[7,[3,4],2]] = 1 + 2 + (7+(3+4)^3)^2
