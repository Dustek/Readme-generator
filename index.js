import inquirer from 'inquirer';
import fs from 'fs';


// Prompt the user for input
inquirer.prompt([
    {
      type: 'input',
      name: 'description',
      message: "Please write the description for your project"
    },
    {
      type: 'input',
      name: 'instalation',
      message: "Please write the installation instructions for your project"
    },
    {
      type: 'input',
      name: 'usage',
      message: "Please write the usage instructions for your project"
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
        message: "Please write whether contributions are welcome and how users can contribute"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please write the testing information, with some examples of testing the project"
    },
    {
        type: 'input',
        name: 'questionsGitHub',
        message: "Please provide your Github username for sending questions"
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: "Please provide your email for sending questions"
    },
  ])
  .then(answers => {
    // Handle the user's answers here
    const { description, installation, usage, license, contributing, tests, questionsGitHub, questionsEmail } = answers;
    const htmlContent = `<html>
    <head>
      <title>Portfolio</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <h1 class="title">Hello, World!</h1>
      <h2>My name is ${name}</h2>
      <h2>My specialty is ${speciality}</h2>
    </body>
    </html>`;

  })