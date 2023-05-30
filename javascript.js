const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const resultDiv = document.getElementById("result");
const userDiv = document.getElementById("user");
const computerDiv = document.getElementById("computer");

function resetValues() {
  userDiv.innerText = 0;
  computerDiv.innerText = 0;
}

function playRound(playerSelection, computerSelection) {
  const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) {
    resultDiv.innerText = "Draw!";
  } else if (winningConditions[playerSelection] === computerSelection) {
    resultDiv.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    userDiv.innerText = Number(userDiv.innerText) + 1;
  } else {
    resultDiv.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerDiv.innerText = Number(computerDiv.innerText) + 1;
  }

  if (userDiv.innerText === "5") {
    resultDiv.innerText = "You won the most games!";
    resetValues();
  } else if (computerDiv.innerText === "5") {
    resultDiv.innerText = "Computer won the most games!";
    resetValues();
  }
}

function getComputerChoice() {
  const strings = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * strings.length);
  const computerChoice = strings[randomIndex];
  return computerChoice;
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
