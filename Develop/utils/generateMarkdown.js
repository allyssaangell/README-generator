// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  [![license](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

## Description
${answers.description}


 ## Table of Contents

 * [Installation](#Installation)
 * [Usage](#Usage)
 * [Contributors](#Contributors)
 * [Tests](#Tests)
 * [License](#License)
 * [Questions](#Questions)


 ## Installation Instructions
 ${answers.installation}

 ## Usage Information
 ${answers.usage}

 ## Contributors
 ${answers.contributor}

 ## Test Instructions
 ${answers.tests}

 ## License
 [![license](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})

 ## Questions
 Please feel free to reach out if you have any additional questions!

 GitHub Username: ${answers.username} (https://github.com/${answers.username})

 Email Address: ${answers.email}

 ## Video Demonstration
 <iframe src="https://drive.google.com/file/d/17-vSeLwJa3PY2tO3z3bE_CirZw6IvBk5/preview" width="640" height="480"></iframe>
`;
}

module.exports = generateMarkdown;
