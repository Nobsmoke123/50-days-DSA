/**
 * Write a program to solve a sodoku puzzle by filling the empty cells.
 * A sodoku solution must satisfy all of the following rules:
 * 1. Each of the digits 1-9 must occur exactly once in each row.
 * 2. Each of the digits 1-9 must occur exactly once in each column.
 * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * the '.' character indicates empty cells.
 */

const sodokuSolver = (board) => {
  const isValid = (board, row, col, num) => {
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num || board[row][x] === num) {
        return false;
      }
      let r = 3 * Math.floor(row / 3) + Math.floor(x / 3);
      let c = 3 * Math.floor(col / 3) + (x % 3);
      if (board[r][c] === num) {
        return false;
      }
    }
    return true;
  };

  const solve = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === ".") {
          for (let num = 1; num <= 9; num++) {
            let char = num.toString();
            if (isValid(board, row, col, char)) {
              board[row][col] = char; // choose
              if (solve(board)) {
                return true;
              }
              board[row][col] = "."; //backtrack
            }
          }
          return false;
        }
      }
    }
    return true;
  };
  solve(board);
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],

  ["6", ".", ".", "1", "9", "5", ".", ".", "."],

  [".", "9", "8", ".", ".", ".", ".", "6", "."],

  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],

  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],

  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],

  [".", "6", ".", ".", ".", ".", "2", "8", "."],

  [".", ".", ".", "4", "1", "9", ".", ".", "5"],

  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(board);
sodokuSolver(board);
console.log(board);
