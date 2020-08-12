const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project",
    },
    {
      type: "input",
      name: "license",
      message: "What kind of license should your project have?",
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install your dependencies?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run your tests?",
    },
    {
      type: "input",
      name: "repo",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contributions",
      message: "What does the user need to know about contributing to the repo?",
    }
  ]);
} 

function writeToFile(fileName, data) {
  fs.writeFile("README.md", generateMarkdown(data), function(err) {

    console.log("README.md generated");

    if (err) {
      throw err;
    }  
  });
}

promptUser()
  .then(function(data) {
    const readmeFile = writeToFile("README.md", data);
  })
  
  .then(function(){
    console.log("sucess");
  })
  .catch(function(err) {
    console.log(err);
  });
