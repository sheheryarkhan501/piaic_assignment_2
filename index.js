#!/usr/bin/env node
import inquirer from "inquirer";
inquirer.prompt([
    {
        type: "input",
        name: "num1",
        message: "Enter the first number: ",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter the second number: ",
    },
    {
        type: "list",
        name: "operation",
        message: "Select an operation: ",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
])
    .then((answers) => {
    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    let result;
    switch (answers.operation) {
        case "Addition":
            result = num1 + num2;
            break;
        case "Subtraction":
            result = num1 - num2;
            break;
        case "Multiplication":
            result = num1 * num2;
            break;
        case "Division":
            result = num1 / num2;
            break;
    }
    console.log("Result:", result);
})
    .catch((error) => {
    console.log("Error:", error);
});
