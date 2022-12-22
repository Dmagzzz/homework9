// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkDown")
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}
// THEN a high-quality, 

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project ?',
      name: 'title',
    },

    {
      type: 'input',
      message: 'What is your description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What command is used to install dependencies?',
      name: 'installations',
    },
      {
        type: 'input',
        message: 'What command is used to start the program?',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What license is used for this program?',
        name: 'license',
        choices: ["MIT", "Apache", "no license"]
      },
      {
        type: 'input',
        message: 'Please enter what is needed to contribute to the project.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What command is used to test the program?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'questions',
      },

  ])
  .then((response) =>
    writeToFile("README.md", generateMarkdown(response))
  );

}

// Function call to initialize app
init();

