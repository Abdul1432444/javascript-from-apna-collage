// Strengthen Your Basics

// const { createElement } = require("react");

// Practice writing code without copying:

// Write a program that adds two numbers.
// var a = 10;
// var b = 15;
// let sum = a + b;
// console.log(sum);

// Write a loop that prints numbers 1–100.
// let i = 0;
// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

// Make a function that checks if a number is even or odd.
// function checkNumber(num) {
//   if (num % 2 === 0) {
//     console.log(num + " " + "is even");
//   } else {
//     console.log(num + " " + "is odd");
//   }
// }
// checkNumber("9");
// Create a function that reverses a string.
// function reverseString(str) {
//   return str.split("").reverse("").join("");
// }
// console.log(reverseString("hello World"));
// 👉 These are small but they train your logic.
// Step 2: Practice DOM Manipulation

// Since JavaScript works with HTML, start practicing with real elements. Example:

// Change text of an HTML <p> tag with JS.

// let changingPara = document.querySelector("p");
// changingPara.innerText = "My Name Is Abdul Wahab";

// Create a button that shows an alert when clicked.
// function showAlert() {
//   alert("Hello");
// }

// Build a counter app (increase/decrease numbers on button click).
// count = 0;
// function increase() {
//   count++;
//   document.getElementById("count").innerText = count;
// }
// function decrease() {
//   count--;
//   document.getElementById("count").innerText = count;
// }

// Make a light/dark mode toggle for a webpage.

function toggleMode() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "white" : "black";
  document.body.style.color =
    document.body.style.color === "white" ? "black" : "white";
}
