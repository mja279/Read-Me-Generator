// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Title: 

  ## Description

  * ${data.description}

  # Table of Contents
  
  >*[Title / ]

  # Installation
  ${data.license}

  # Usage
  ${data.repo}

  # License

  ${data.dependencies}

  # Contributing

  ${data.contributions}

  # Tests
  ${data.tests}

  # Questions
  
  If you have any questions or issues, please contat me directly at  ${data.email}. You can find more information of my work at  ${data.github}.

  `;
}

module.exports = generateMarkdown;
