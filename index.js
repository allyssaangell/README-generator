// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project description? (Required)',
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'ToC',
      message: 'What is your project table of contents? (Required)',
      validate: (ToCInput) => {
        if (ToCInput) {
          return true;
        } else {
          console.log("Please enter your project table of contents!");
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is your installation? (Required)',
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter your project installation!');
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is your project usage? (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter your project usage!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "license",
      message: "What is your project license? (Required)",
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Please enter your project license!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributor",
      message: "Who are the contributors to your project? (Required)",
      validate: (contributorInput) => {
        if (contributorInput) {
          return true;
        } else {
          console.log("Please enter the contributors!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "What are your project tests? (Required)",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("Please enter your project tests!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questions",
      message: "What are your project questions? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project questions!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
     questions()
}

// Function call to initialize app
init();
