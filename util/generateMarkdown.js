// function to generate markdown for README
function generateMarkdown(data) {
  return `

  ## Title: 
  
  My GitHub username is: ${data.github}

  My email address is: ${data.email}

  #Description

  #Table of Contents

  #Installation

  #Usage

  #License

  #Contributing

  #Tests

  #Questions`;
}

module.exports = generateMarkdown;
