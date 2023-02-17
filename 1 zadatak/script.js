// Define some constants for the game
const EMPTY = '';
const X = 'X';
const O = 'O';
const WINNING_COMBINATIONS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

// Initialize the game
let board = Array(9).fill(EMPTY);
let currentPlayer = X;
let gameover = false;

// Define a function to update the board with the current player's move
function updateBoard(field) {
  if (!gameover && board[field-1] === EMPTY) {
    board[field-1] = currentPlayer;
    document.getElementById('field-'+field).textContent = currentPlayer;
    checkForWinner();
    currentPlayer = (currentPlayer === X) ? O : X;
  }
}

// Define a function to check for a winner
function checkForWinner() {
  for (let combo of WINNING_COMBINATIONS) {
    let [a, b, c] = combo;
    if (board[a-1] !== EMPTY && board[a-1] === board[b-1] && board[b-1] === board[c-1]) {
      document.getElementById('tekst1').textContent = currentPlayer + ' wins!';
      gameover = true;
      setTimeout(resetBoard, 5000);
      return;
    }
  }
  if (board.every(field => field !== EMPTY)) {
    document.getElementById('tekst1').textContent = 'Draw!';
    gameover = true;
    setTimeout(resetBoard, 5000);
  }
}

// Define a function to reset the board
function resetBoard() {
  board = Array(9).fill(EMPTY);
  currentPlayer = X;
  gameover = false;
  for (let i = 1; i <= 9; i++) {
    document.getElementById('field-'+i).textContent = EMPTY;
  }
  document.getElementById('tekst1').textContent = '';
}

// Add event listeners to the buttons
for (let i = 1; i <= 9; i++) {
  document.getElementById('field-'+i).addEventListener('click', function() {
    updateBoard(i);
  });
}
