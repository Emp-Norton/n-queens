/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

window.findNRooksSolution = function(n) {
  var solution = undefined;
  var board = new Board({n: n});

  var boardRecurse = function (r) {
    if (r === board.attributes.n) {
      solution = board.rows();
      return board.rows();
    }

    for (var c = 0; c < board.attributes.n; c++) {
      board.togglePiece(r, c);
      if (!board.hasAnyColConflicts()) {
        return boardRecurse(r + 1);
      } 
      board.togglePiece(r, c);
    }
  };
  return boardRecurse(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  var columnRecurse = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var c = 0; c < n; c++) {
      board.togglePiece(row, c);
      if (!board.hasAnyColConflicts()) {
        columnRecurse(row + 1);
      } 
      board.togglePiece(row, c);
    } 
  };

  columnRecurse(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; 
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return {n: n};
  }

  var columnRecurse = function(row) {
    if (row === n) {
      solution = board.rows();
      return board.rows();
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() && !board.hasAnyMinorDiagonalConflicts() && !board.hasAnyMajorDiagonalConflicts()) {
        columnRecurse(row + 1);
        if(solution) {
         return solution;
        }
      }
      board.togglePiece(row, col);
    }
  };
  return columnRecurse(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return 0;
  }

  var columnRecurse = function(row) {
    if (row === n) {
      solutionCount++;
      return
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
debugger;
      if (!board.hasAnyColConflicts() && !board.hasAnyRowConflicts() && !board.hasAnyMinorDiagonalConflicts() && !board.hasAnyMajorDiagonalConflicts()) {
        columnRecurse(row + 1); 
      }
      board.togglePiece(row, col);
debugger;
    }
  };
  columnRecurse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};





