# K-th Symbol in Grammar

## Question

We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01 and each occurrence of 1 with 10. For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110. Given two integer n and k, return the kth (1-indexed) symbol in the nth row of ta table of n rows.

## Clarifying questions

- Can n be given as 0? No n >= 1
- Can k be out of bound? No k = 2^(n-1)

## Solution and Explanation.

0 ----> n = 1
01 ----> n = 2
0110 ----> n = 3
01101001 ----> n = 4

### What do you observe?

Do you observe that the value of the current row is the made up of the value of the previous row? Say for example now n = 4
with value 01101001
the first 4 digits of the value is gotten from the previous row (n = 3). And the second half of the value is gotten from flipping the bits of the previous value
so n = 3
0110 ----> flipping it gives 1001 which makes up the second half of n = 4.

Now that we've gotten that relation out of the way. We're more concerned with the kth element. So take for instance if n = 4 and k = 3. Since k falls within the first half of the n = 4 which is the same value as n = 3. We can get the value of k from n = 3. But how do we reconcile the position of k when k is on the other half say for instance 7. We use the formular k = k - mid_value to find k for the n-1 row and then get the not of that value.
