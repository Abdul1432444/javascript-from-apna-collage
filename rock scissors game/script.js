let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("Game draw shu");
};
const showWinner = (userWin) => {
  if (userWin) {
    console.log("you Win");
  } else {
    console.log("you lose");
  }
};
const playGame = (userChoice) => {
  console.log("UserChoice=", userChoice);
  const compChoice = genCompChoice();
  console.log("CompChoice=", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
