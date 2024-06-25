#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome To My Adventure quiz Game");
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "Q1.Which keyword is used to declare a variable that can be reassigned in JavaScript?",
        choices: ["let", "const", "var", "static"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Q2.Which keyword is used to declare a variable with a block scope in JavaScript?",
        choices: ["let", "global", "var", "static"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "Q3.What does the 'const' keyword in JavaScript prevent?",
        choices: ["Redeclaration", "Reassignment", "Block scoping", "Accessing global variables"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "Q4.Which TypeScript feature ensures a variable can only hold a specific type of value?",
        choices: ["Interfaces", "Classes", "Type annotations", "Packages"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "Q5.What value does an uninitialized variable hold in JavaScript?",
        choices: ["Null", "Undefined", "NaN", "Empty"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "let":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.Question_2) {
    case "let":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.Question_3) {
    case "Reassignment":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.Question_4) {
    case "Type annotations":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.Question_5) {
    case "Undefined":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
if (score >= 5) {
    console.log("Congratulation!");
    console.log(`score : ${score}`);
}
else {
    console.log("You failed try next time");
    console.log(`score : ${score}`);
}
function getMyName() {
    return "🚀 Hammad Ali 😎";
}
function showProjectOwner() {
    const name = getMyName();
    console.log(`This project is created by: ${name}`);
}
showProjectOwner();
