const { use } = require("react");

function play(userChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computer = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (userChoice === computer) result = "draw";
  else if (
    (userChoice === "rock" && computer === "scissors") ||
    (userChoice === "paper" && computer === "rock") ||
    (userChoice === "scissors" && computer === "paper")
  )
    result = "you win";
  else result = "you lose";
  document.getElementById("result").innerText =
    "computer chose" + computer + " " + result;
}
