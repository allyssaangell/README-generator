// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) 
//{
//   if (answers.license === "MIT") {
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   }
// }

// Apache 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
// MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  [![license](https://img.shields.io/badge/License-${answers.license
    .toUpperCase()
    .split("-")
    .join("v")}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/) (https://opensource.org/licenses/${answers.license})

## Description
${answers.description}

  ## Table of Contents

 * [Installation](#Installation)
 * [Usage](#Usage)
 * [Contributors](#Contributors)
 * [Tests](#Tests)
  
 ## Installation Instructions
 ${answers.installation}

 ## Usage Information
 ${answers.usage}

 ## Contributors
 ${answers.contributor}

 ## Test Instructions
 ${answers.tests}

 ## License
 ${answers.license}
`;
}

module.exports = generateMarkdown;
