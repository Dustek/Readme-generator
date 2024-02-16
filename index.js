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
      name: 'instalation',
      message: "Please enter the project installation instructions"
    },
    {
      type: 'input',
      name: 'usage',
      message: "Please enter the project usage instructions"
    },
    {
        //TODO: add badges to readme based on answer
        //TODO: give custom description for each option
      type: 'list',
      name: 'license',
      message: "Choose a license for your project:",
      choices: [
            'MIT License',
            'GNU General Public License v3.0',
            'Apache License 2.0',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Mozilla Public License 2.0',
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
    // Destructure answers object
    const { title, description, installation, usage, license, contributing, tests, questionsGitHub, questionsEmail } = answers;

    // Generate README content based on user's input
    const readmeContent = `
# ${answers.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions or concerns, please don't hesitate to reach out via [GitHub](https://github.com/${answers.questionsGitHub}) or email at ${answers.questionsEmail}.
`;

    fs.writeFile('README.md', readmeContent, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been successfully generated!');
    });
});