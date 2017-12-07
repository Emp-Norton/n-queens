/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// option 1
// iterate through rows, passing row index into traverse helper
  // for each column in row, toggle piece
  //check for row and column collision,
    // if none
    // if collision, toggle piece back

// recurse accepts a row index,
// basecase is if row index === n
  // set solution to board & return
// for each column
  // toggle piece, check for collisions
    // if no collisions
      //recurse(r + 1)
    // if collision, untoggle
// return
window.findNRooksSolution = function(n) {
  var solution = undefined;
  var board = new Board({n:n});

  var boardRecurse = function (r) {
    if (r === board.attributes.n) {
debugger;
      solution = board.rows();
      return board.rows()
    }

    for (var c = 0; c < board.attributes.n; c++) {
      board.togglePiece(r, c);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        // var justPlaced = [r, c];
        return boardRecurse(r + 1);
        board.togglePiece(r, c);
      } else {
        board.togglePiece(r, c);
      }
    }
  }
  return boardRecurse(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});


  var columnRecurse = function(n, row, col){
    var row = row || 0;
    if (col === n){
      solutionCount++;
      return
    }

    for (var c = col; c < n; c++){
      console.log(`Row ${row} Col ${c}`)
      board.togglePiece(row, c);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()){
          columnRecurse(n, row + 1, c);
         board.togglePiece(row, c);
      } else {
        board.togglePiece(row, c);
      }
    }
  };

  for (var startCol = 0; startCol < n; startCol++){
     columnRecurse(n, 0, startCol);
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
