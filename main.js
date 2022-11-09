const a = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  return a[x];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    computerScore++;
    return "Player loses round";
  }
  if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors")
  ) {
    playerScore++;
    return "Player wins round";
  }
  if (playerSelection == computerSelection) {
    return "draw";
  }
}

let loop = 5;
function game() {
  for (let i = 0; i < loop; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = window.prompt("Rock,Paper or Scissors");
    let outcome = playRound(playerSelection.toLowerCase(), computerSelection);

    console.log(outcome);
    //infinite loop over best of 5
    // if (playerScore <= 4 && computerScore <= 4) {
    //   loop++;
    // }

    if (playerScore == 3) {
      console.log("Player wins");
      break;
    } else if (computerScore == 3) {
      console.log("Player lose");
      break;
    }
  }
  if (playerScore <= 4 && computerScore <= 4) {
    console.log("noone wins match");
  }
}

game();
