// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "What is your project description? (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What are your installation instructions? (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter your project installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is your Usage Information? (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter your project usage information!");
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
      message: "What are your project test instructions? (Required)",
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
// const writeToFile = (fileName, data) => {
//     return writeFileAsync(fileName, data);
// }

// TODO: Create a function to initialize app
// fs.writeToFile('README.md', generateMarkdown, err => {
//     if (err) throw err;
//     console.log('README complete!');
// });

async function init() {
  try {
    const answers = await questions();

    console.log(JSON.stringify(answers, null, "\t"));

    const readme = generateMarkdown(answers);

    await writeFileAsync("README.md", readme);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
