const inquirer = require ("inquirer");
const questions = [
    
    //Array of questions:
    //1. Username for Github
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
    },
    // 2. Repo name in GitHub
    {
        type: "input",
        name: "reponame",
        message: "Enter your GitHub repository name:",
    },
    // 3. Project title
    {
        type: "input",
        name: "title",
        message: "Provide a title for your project:",
    },
    // 4. Project description
    //how to do a template literal to the the title above to the 
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
        name: "projectintall",
        message: "Give details of your project installation?",
    },
    // 7. Create license list
    {
        type: "input",
        name: "license",
        message: "Which license did you use?",
    },
    // 8. How to contribute
    {
        type: "input",
        name: "contribute",
        message: "How can one contribute to the project?",
    },
    // 9. Project test
    {
        type: "input",
        name: "test",
        message: "Test your project and explain",
    },
]

//Call the array 
inquirer.prompt(questions)
.then(answers => {
    // Check if code is working
    console.log(answers)

})