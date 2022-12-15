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
      message: 'What ?',
      name: 'title',
    },

    {
      type: 'password',
      message: 'What is your password?',
      name: 'description',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'tableOfContents',
    },

    {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'installations',
      },
      {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Re-enter password to confirm:',
        name: 'license',
        choices: ["MIT", "Apache", "no license"]
      },
      {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'contributing',
      },
      {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'tests',
      },
      {
        type: 'password',
        message: 'Re-enter password to confirm:',
        name: 'questions',
      },

  ])
  .then((response) =>
    writeToFile("README.md", generateMarkdown(response))
  );

}

// Function call to initialize app
init();

