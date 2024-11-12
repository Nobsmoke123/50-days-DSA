# Josepheus problem: Find the winner of the circular game.

## Question

There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in a clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.

1. start at the 1st friend.
2. count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
3. The last friend you counted leaves the circle and loses the game.
4. If there's still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
5. Else, the last friend in the circle wins the game.
   Given the number of friends n and an integer k, return the winner of the game.
