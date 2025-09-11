// conditional statements

// let age = 18;

// if (age >= 18) {
//   console.log("you can vote");
// }
// if (age < 18) {
//   console.log("you can't vote");
// }
// // ternary operators

// let age = 18;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// switch statement

// let exprs = "Mango";

// switch (exprs) {
//   case "banana":
//     console.log("banana price is 400rs");
//     break;
//   case "Mango":
//     console.log("Mango Price is 500rs");
// }
// multiple numbers
// let num = prompt("enter the number");

// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5");
// } else {
//   console.log(num, "is not a multiple of 5");
// }
// grading system

// let marks = prompt("Enter the marks");

// if (marks >= 80 && marks <= 100) {
//   console.log("Excellent You have Grade A");
// } else if (marks >= 70 && marks <= 79) {
//   console.log("Good you have Grade B");
// } else if (marks >= 60 && marks <= 69) {
//   console.log("Nice you have Grade C");
// } else if (marks >= 50 && marks <= 59) {
//   console.log("your Grade is D");
// } else if (marks >= 40 && marks <= 49) {
//   console.log("your Grade is F");
// } else if (marks >= 101 || marks <= 39) {
//   console.log(" please Enter the marks in 39 to 100");
// }
// LOOPS PRACTIC

// FIRST FOR LOOP
// for (let count = 1; count <= 5; count++) {
//   console.log("abdul");
// }
// now practice sum in loop

// let sum = 1;
// let n = 100;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// print all even number upto 100

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("num is =", num);
//   }
// }
// // short guessing number game
// let gameNum = 20;
// let userNum = prompt("guess the Number");

// while (userNum != gameNum) {
//   userNum = prompt("you have enter the wrong number try again");
// }
// console.log("congratulation you have enter the correct number");
// string interpolation
// let product = {
//   item: "pen",
//   price: 10,
// };
// let output = `the cost of ${product.item} is ${product.price} Rupees`;
// console.log(output);
// some methods of string

// let str = "Abdul Wahab";
// str = str.toUpperCase();
// console.log(str);

// let newStr = "Abdul Wahab Khan";
// newStr = newStr.toLowerCase();
// console.log(newStr);

// // remove spacing
// let A = "     Abdul  Wahab    ";
// A = A.trim();
// console.log(A);
// practice question

// let fullName = prompt("Enter Your Name");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);
// now lets find class average

// let marks = [50, 60, 66, 99, 46];

// let sum = 0;

// for (let val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(`Average marks of ${avg}`);
// now print the values of itmes after 10% off

// let items = [300, 500, 250, 400];

// let i = 0;
// for (let val of items) {
//   let offer = val / 10;
//   items[i] = items[i] - offer;

//   console.log(`the value of item after offer is = ${items[i]}`);
//   i++;
// }
// another way to print off values of items

// let items = [300, 500, 250, 400];

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }
// console.log(items);

// Now lets practice on Arrays

// let compenies = ["Microsoft", "General Petrolium", "RMI", "AB Softwares"];
// compenies.splice(2, 1, "AB");
// console.log(compenies);
// let compenies = ["Microsoft", "General Petrolium", "RMI", "AB Softwares"];
// compenies.push("Software House");
// console.log(compenies);
// now we will start function from here
