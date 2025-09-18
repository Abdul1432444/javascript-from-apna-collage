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
// function myfunction() {
//   console.log("My Name is Abdul Wahab");
//   console.log("I am learning JS from Apna Collage");
// }
// myfunction();
// function sum(a, b) {
//   sum1 = a + b;
//   return sum1;
// }
// let val = sum(5, 6);
// console.log(val);
// arrow function
// const arowMul = (a, b) => {
//   console.log(a + b);
// };
// arowMul(2, 5);
// now we will vowels in a word

// function countvowels(str) {
//   let count = 0;

//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "o" ||
//       char === "i" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(count);
// }
// for each method
// let arr = ["karachi", "peshawar", "multan"];

// arr.forEach((val, idx) => {
//   console.log(val, idx);
// });
// square of a Number using forEach
// let arr = [55, 44, 63, 33];

// arr.forEach((num) => {
//   console.log(num * num);
// });
// map method of arrr and function
// let arr = [55, 44, 63, 33];

// let newval = arr.map((val) => {
//   return val * 2;
// });
// console.log(newval);
// filter method of arr and function
// print even numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(newArr);
// NOW REDUCE METHOD
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);
// how to print the largest number of array using reduce

// let arr = [1, 2, 3, 4, 5, 66, 7, 8, 9, 10];

// let output = arr.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });
// console.log(output);
// now practice questions
// let marks = [86, 40, 100, 101, 95, 90, 91];

// let highMarks = marks.filter((val) => {
//   return val > 90;
// });

// console.log(highMarks);
// question no 2

// let n = prompt("enter any number");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(sum);
// let product = arr.reduce((res, curr) => {
//   return res * curr;
// });
// console.log(product);
// NOW WE HAVE STARTED DOM Document Object MODEL

// DOM MANIPULATION
// let element = document.getElementById("heading");
// console.dir(element);
// let element2 = document.getElementById("second-heading");
// console.dir(element2);
// let elements = document.getElementsByClassName("para");
// console.dir(elements);
// let elementsbytag = document.getElementsByTagName("p");
// console.dir(elementsbytag);
// let elementbyquerry = document.querySelector(".para");
// console.log(elementbyquerry);
// let elementbyquerry2 = document.querySelectorAll(".para");
// console.log(elementbyquerry2);
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Apna Collage";

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
//   div.innerText = ` unique value${idx}`;
//   idx++;
// }
// now we will access the attributes

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "Abdul"));
// let para = document.querySelector("p");
// para.style.backgroundColor = "purple";
// para.style.fontSize = "50px";
// para.style.display = "inline";
// para.style.color = "white";
// NOW WE WILL PRACTICE HOW TO INSERT NEW ELLEMNETS

// let newHeading = document.createElement("h1");

// newHeading.innerHTML = "<i><bold> Hi My Name Is Abdul Wahab</bold></i>";
// document.querySelector("body").prepend(newHeading);

// newHeading.remove();

// document.querySelector("h2").append(newHeading);
// newHeading.style.backgroundColor = "purple";
// newHeading.style.display = "inline";
// newHeading.style.color = "white";
// newHeading.style.fontSize = "20px";
// NOW PRACTICE QUESTION WILL TRY TO SOLVE MYSELF
// let newBtn = document.createElement("button");
// newBtn.innerHTML = "click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// newBtn.style.fontSize = "40px";
// newBtn.style.borderRadius = "20px";
// newBtn.style.cursor = "pointer";

// document.querySelector("body").prepend(newBtn);

// let para = document.querySelector("p");
// para.classList.add("para1");

// console.log(para);
