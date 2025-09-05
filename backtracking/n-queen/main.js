/**
 * Coding Exercise: N Queen
 * The n-queens puzzle is the problem ofplacing n queens on an nxn chessboard such that no two queens attack each other.
 * Given the integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queen's placement, where 'Q' and '.'
 * both indicate a queen and an empty space, respectively.
 *
 */

const solveNQueens = (n) => {
  console.log("Entered here!!");
  const result = [];
  const board = new Array(n).fill().map(() => new Array(n).fill(".")); // create an nxn 2D matrix

  const convertBoard = (board) => {
    return board.map((row) => row.join(""));
  };

  //   Checks if it is valid to place a queen at board[row][col]
  const isValid = (row, col, board) => {
    // Check the same column for other queens
    for (let x = 0; x < row; x++) {
      if (board[x][col] === "Q") {
        return false;
      }
    }

    // Check the top-left diagonal
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
      if (board[r][c] === "Q") {
        return false;
      }
    }

    // Check the top-right diagonal
    for (let r = row, c = col; r >= 0 && c < n; r--, c++) {
      if (board[r][c] === "Q") {
        return false;
      }
    }

    return true;
  };

  const positionNextQueen = (board, row) => {
    // base case if all queens are placed
    if (row === n) {
      result.push(convertBoard(board));
      return;
    } else {
      // Try placing the queen in each column of the next row
      for (let col = 0; col < n; col++) {
        if (isValid(row, col, board)) {
          board[row][col] = "Q"; // place the queen
          positionNextQueen(board, row + 1);
          board[row][col] = "."; // Backtrack: remove the queen
        }
      }
    }
  };

  positionNextQueen(board, 0);
  return result;
};

console.log(solveNQueens(4));
