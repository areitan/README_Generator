// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// Description, Installation, Usage, Contributing, and Tests

const questions = [{
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},
{
    type: "input",
    name: "title",
    message: "What is the title of this project?",
},
{
    type: "input",
    name: "description",
    message: "Please describe this project.",
},
{
    type: "input",
    name: "installation",
    message: "Please describe installation steps for the application.",
},
{
    type: "input",
    name: "usage",
    message: "What is the proposed usage for this project?",
},
{
    type: "input",
    name: "Contributing",
    message: "Please describe how others might contribute to your project?",
},
{
    type: "input",
    name: "test",
    message: "Describe tests of your application.",
},
{
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: ["MIT", "Apache", "ISC"]
},
];

// FIX THIS PART
// TODO: Create a function to write README file. This funtion is modeled from exercise 13 week 9
function writeToFile(data) {
    fs.writeFile("sampleREADME.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Done')
    );
};


// TODO: Create a function to initialize app. Uses inquirer prompt
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile)
}

// Function call to initialize app
init();

