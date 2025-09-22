let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = (userChoice, compChoice) => {
  msg.innerText = `Game Draw! your ${userChoice} and computer choice ${compChoice} are same `;
  msg.style.backgroundColor = "rgb(14, 14, 32)";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats computer ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerText = ` You Lose! computer ${compChoice} beats your ${userChoice} badly`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("UserChoice=", userChoice);
  const compChoice = genCompChoice();
  console.log("CompChoice=", compChoice);
  if (userChoice === compChoice) {
    drawGame(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
