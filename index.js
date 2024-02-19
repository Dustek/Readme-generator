import inquirer from 'inquirer';
import fs from 'fs';

// Prompt the user for input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "Please name the project"
    },
    {
      type: 'input',
      name: 'description',
      message: "Please enter a description of the project"
    },
    {
      type: 'input',
      name: 'installation',
      message: "Please enter the project installation instructions"
    },
    {
      type: 'input',
      name: 'usage',
      message: "Please enter the project usage instructions"
    },
    {
      type: 'list',
      name: 'license',
      message: "Choose a license for your project:",
      choices: [
            'Creative commons 1.0',
            'Apache 2.0',
            'GNU GPL v3',
            'The Hippocratic License 3.0',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please enter project contribution information"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please enter project testing information"
    },
    {
        type: 'input',
        name: 'questionsGitHub',
        message: "Please enter your Github username"
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: "Please enter your email"
    },
  ])
  .then(answers => {
    const { title, description, installation, usage, license, contributing, tests, questionsGitHub, questionsEmail } = answers;

    //  Determine badge based on license
    let badgeURL;
    switch (license) {
        case 'Creative commons 1.0':
            badgeURL = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
            break;
        case 'Apache 2.0':
            badgeURL = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GNU GPL v3':
            badgeURL = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'The Hippocratic License 3.0':
            badgeURL = '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)';
            break;
        default:
            badgeURL = '';
    }

    // Generate README content based on user's input
    const readmeContent = `
# ${title} ${badgeURL}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license}.

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions or concerns, please don't hesitate to reach out via [GitHub](https://github.com/${questionsGitHub}) or email at ${questionsEmail}.
`;

    fs.writeFile('README.md', readmeContent, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been successfully generated!');
    });
});