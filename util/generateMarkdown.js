// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.project}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license) 
  * [Contributors](#contributing) 
  * [Tests](#tests) 
  * [Questions](#questions) 
   
  
  # Installation
  
  To install required dependencies, run the following command: 
  > ${data.dependencies}

  # Usage

  ${data.repo}

  # License

  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  > This project is licensed under the ${data.license} license. 

  # Contributing

  ${data.contributions}

  # Tests

  To run tests, run the following command:
  > ${data.tests}

  # Questions
  
  If you have any questions or issues, please contat me directly at  ${data.email}. You can find more information of my work at  ${data.github}.

  `;
}

module.exports = generateMarkdown;
