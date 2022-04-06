const restartGame = document.getElementById("restart-game");
let yourPoints = document.getElementById("your-points");
let computerPoints = document.getElementById("computer-points");
let enemyOption = document.getElementById("enemy-option");
let countPlayer = 0;
let countComputer = 0;
let round = 1;

window.onload = () => {
  restartGame.addEventListener("click", function () {
    location.reload();
  });
};

/* assign values computer */
function computerChoice() {
  let randomComputerNr = Math.floor(Math.random() * 3);
  if (randomComputerNr == 0) {
    return "siccors";
  } else if (randomComputerNr == 1) {
    return "stone";
  } else {
    return "paper";
  }
}

function game(gamerChoice) {
  if (round < 4) {
    if (gamerChoice == "siccors") {
      siccorsFunction();
    } else if (gamerChoice == "stone") {
      stoneFunction();
    } else {
      paperFunction();
    }
    round++;
    if (round > 3) {
      if (countPlayer == countComputer) {
        enemyOption.innerHTML = "Draw! Let's try it again";
      } else if (countPlayer > countComputer) {
        enemyOption.innerHTML = "Congratulation you win!!!";
      } else {
        enemyOption.innerHTML = "Too bad you lost the game!";
      }
    }
  }
}

/* players Choice */
function siccorsFunction() {
  computerChoice();
  const computerRandomName = computerChoice();
  if (computerRandomName == "siccors") {
    countPlayer++;
    countComputer++;
    yourPoints.innerHTML = "Your score: " + countPlayer + " points";
    computerPoints.innerHTML = "Computer score: " + countComputer + " points";
    enemyOption.innerHTML = "Draw!";
  } else if (computerRandomName == "stone") {
    countComputer++;
    computerPoints.innerHTML = "Computer score: " + countComputer + " points";
    enemyOption.innerHTML = "Too bad! Your opponent had a stone";
  } else {
    // computer has paper
    countPlayer++;
    yourPoints.innerHTML = "Your score: " + countPlayer + " points";
    enemyOption.innerHTML = "Great! Point for you";
  }
  // console.log(countPlayer, countComputer)
}

function stoneFunction() {
  computerChoice();
  const computerRandomName = computerChoice();
  if (computerRandomName == "stone") {
    countPlayer++;
    countComputer++;
    yourPoints.innerHTML = "Your score: " + countPlayer + " points";
    computerPoints.innerHTML = "Computer score: " + countComputer + " points";
    enemyOption.innerHTML = "Draw!";
  } else if (computerRandomName == "paper") {
    countComputer++; // stone wins against scissors, because we are in the scissors function^^
    computerPoints.innerHTML = "Computer score: " + countComputer + " points";
    enemyOption.innerHTML = "Too bad! Your opponent had paper";
  } else {
    // Computer has scissors
    countPlayer++;
    yourPoints.innerHTML = "Your score: " + countPlayer + " points";
    enemyOption.innerHTML = "Great! Point for you";
  }
  // console.log(countPlayer, countComputer)
}

function paperFunction() {
  computerChoice();
  const computerRandomName = computerChoice();
  if (computerRandomName == "paper") {
    countPlayer++;
    countComputer++;
    yourPoints.innerHTML = "Your score: " + countPlayer + " points";
    computerPoints.innerHTML = "Computer score: " + countComputer + " points";
    enemyOption.innerHTML = "Draw!";
  } else if (computerRandomName == "siccors") {
    countComputer++; // stone wins against scissors, because we are in the scissors function^^
    computerPoints.innerHTML = "Computer score: " + countComputer + " points";
    enemyOption.innerHTML = "Too bad! Your opponent had scissors";
  } else {
    // computer has stone
    countPlayer++;
    yourPoints.innerHTML = "Your score: " + countPlayer + " points";
    enemyOption.innerHTML = "Great! Point for you";
  }
  // console.log(countPlayer, countComputer)
}
