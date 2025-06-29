// const demoObject = {
//   name: "John",
//   age: 30,
//   languages: ["English", "Spanish"],
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };

// demoObject.name = "Jane"; // Updating a property
// demoObject.level = "Beginner"; // Adding a new property

// console.log(demoObject["languages"]); // Accessing a propertyS

//function
// function showGreeting() {
//   console.log("Hello, World!");
// }

// showGreeting();

// function total() {
//   return 10 + 20;
// }
// const result = total();
// console.log(result); // 30

// function add(a = 0, b = 0) {
//   return a + b;
// }

// add();
// const sum = add();
// console.log(sum); // 15
// // function with default parameters

// // function with parameters
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// greet("Alice"); // Hello, Alice!

//IIFE  // Immediately Invoked Function Expression

// (function () {
//   console.log("This function runs immediately!");
// })();

// (function (name) {
//   console.log("Hello, " + name + "!");
// })("Bob"); // Hello, Bob!

// // // Arrow function ES6
// // const add = (a, b) => a + b;
// const add = (a, b) => {
//   return a + b;
// };
// ((a, b) => {
//   return a + b;
// })(10, 20); // 30

// Call back là gì
// function greet(name) {
//   name();
// }

// greet(() => {
//   console.log("Hello, World!");
// });

// các bộ array method trong js

const numbers = ['1', '2', '3', '4', '5'];
const doubled = numbers.map((number, idx) => {
  return parseInt(number);
});
console.log(doubled); // [2, 4, 6, 8, 10]

numbers.reduce((prev, current, idx) => {
  return a + b;
}, 0); // 15
