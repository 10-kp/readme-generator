const inquirer = require ("inquirer");
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//To ask user the questions
const promptUser = () => {
    return inquirer.prompt([  
    
    //Array of questions:

    //1. Project title 
    {
        type: "input",
        name: "title",
        message: "Provide a title for your project:",
    },

    // 2. Username for Github
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
    },

    // 3. Repo name in GitHub
    {
        type: "input",
        name: "reponame",
        message: "Enter your GitHub repository name:",   
    },

    // 4. Project description
    {
        type: "input",
        name: "description",
        message: "Describe your project:",
    },

    // 5. Explain the installation
    {
        type: "input",
        name: "installation",
        message: "How did you install?",
    },

    // 6. Explain the instructions for the project
    {
        type: "input",
        name: "usage",
        message: "Give usage information?",
    },

    // 7. How to contribute
    {
        type: "input",
        name: "contribute",
        message: "How can one contribute to the project?",
    },

    // 8. Project test
    {
        type: "input",
        name: "test",
        message: "Test your project",
    },

    // 9. Create license list
    {
        type: "list",
        name: "license",
        message: "Which license did you use?",
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0','cc','ecl-2.0', 'epl-1.0', 'mit', 'others'],
    },

    //10. Enter your email
    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
    },
]);
};

const init = () => {
    promptUser()
      .then((data) => {
          const template = `
          
          # Title 
          ${data.title} 

          ## Repo 
          ${data.username}

          ##Title
          ${data.reponame} 

          ##Description
          ${data.description} 

          ##Installation
          ${data.installation} 

          ##Usage
          ${data.usage} 

          ##Contribute
          ${data.contribute}

          ##Test
          ${data.test} 

          ##License
          ${data.license} 

          ##Email
          ${data.email}`

          writeFileAsync('ReadMeExample.md', template)})
      .then(() => console.log('Successfully createad ReadMe file.'))
      .catch((err) => console.error(err));
  };
  
init();