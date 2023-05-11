function getComputerChoice() {
  const strings = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * strings.length);
  const computerChoice = strings[randomIndex];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  console.log("player:", playerSelection);
  console.log("computer:", computerSelection);

  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  let result;

  if (playerSelection === computerSelection) {
    console.log("Draw!");
    result = "draw";
  } else if (winningConditions[playerSelection] === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    result = "user";
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    result = "computer";
  }

  return result;
}

let i = 0;
let userWon = 0;
let computerWon = 0;

while (i < 5) {
  console.log("Turn", i + 1);

  const computerChoice = getComputerChoice();
  let playerSelection = "";

  while (playerSelection === "") {
    playerSelection = prompt(
      "Enter your selection (rock, paper, or scissors):"
    ).toLowerCase();
  }

  const result = playRound(playerSelection, computerChoice);
  if (result === "user") {
    userWon = userWon + 1;
  } else if (result === "computer") {
    computerWon = computerWon + 1;
  }

  i = i + 1;
}

if (userWon === computerWon) {
  console.log("Its a draw!");
} else if (computerWon > userWon) {
  console.log("Computer won the most games!");
} else if (userWon > computerWon) {
  console.log("You won the most games!");
}
