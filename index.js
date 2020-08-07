const inquirer = require("inquirer");
const fs = require("fs");

const data = fs.writeFile("readme.md", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  console.log("Success");

 // array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    }
    // {
    //   type: "input",
    //   name: "email",
    //   message: "What is your email address?"
    // },
    // {
    //   type: "input",
    //   name: "project",
    //   message: "What is your project's name?"
    // },
    // {
    //   type: "input",
    //   name: "description",
    //   message: "Please write a short description of your project:"
    // },
    // {
    //   type: "input",
    //   name: "license",
    //   message: "What type of license should your project have?"
    // },
    // {
    //   type: "input",
    //   name: "dependencies",
    //   message: "What command should be run to install dependencies?"
    // },
    // {
    //   type: "input",
    //   name: "tests",
    //   message: "What command should be run to run tests?"
    // },
    // {
    //   type: "input",
    //   name: "usage",
    //   message: "What does the user need to know about using the repo?"
    // },
    // {
    //   type: "input",
    //   name: "contribution",
    //   message: "What does the user need to know about contributing to the repo?"
    // },
  ])
}

// function to initialize program
function init(answers) {
  return
  

}

// function call to initialize program
init();

});

