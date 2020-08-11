const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
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
