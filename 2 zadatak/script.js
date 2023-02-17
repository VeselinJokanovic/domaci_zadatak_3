const container = document.querySelector("#container");
const addSquareBtn = document.querySelector("#add-square-btn");
const deleteSquareBtn = document.querySelector("#delete-square-btn");
const palindromeMessage = document.querySelector("#palindrome-message");

let numSquares = 0;

function createSquare() {
  const div = document.createElement("div");
  div.classList.add("square");
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 1;
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    input.value = "";
  });
  div.appendChild(input);
  div.appendChild(button);
  container.appendChild(div);
}

function createSquares(num) {
  for (let i = 0; i < num; i++) {
    createSquare();
  }
}

function updatePalindromeMessage() {
  const squares = document.querySelectorAll(".square input");
  const text = Array.from(squares)
    .map((square) => square.value)
    .join("");
  const reversedText = text.split("").reverse().join("");
  if (text === reversedText) {
    palindromeMessage.textContent = "The sentence is a palindrome";
  } else {
    palindromeMessage.textContent = "The sentence isn't a palindrome";
  }
}

addSquareBtn.addEventListener("click", () => {
  numSquares++;
  createSquare();
});

deleteSquareBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  if (squares.length > 0) {
    container.removeChild(squares[squares.length - 1]);
    numSquares--;
  }
});

const numSquaresInput = prompt("Enter the number of squares:");
numSquares = parseInt(numSquaresInput) || 0;
createSquares(numSquares);

container.addEventListener("input", () => {
  updatePalindromeMessage();
});

updatePalindromeMessage();
