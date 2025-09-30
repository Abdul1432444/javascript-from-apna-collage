let secret = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if (guess === secret) {
    document.getElementById("result").innerText = "correct";
  } else {
    document.getElementById("result").innerText = "try again";
  }
}
