// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// https://shields.io/category/license
function renderLicenseLink(license) {
  if (license === "MIT"){ 

  }
  if (license === "Apache"){ 

  }
  if (license === "GPL"){ 

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  
  ## Description
  
  ${data.description}

---
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#test)
  - [Credits](#credits)
  - [License](#license)

---
  ## Installation

  ${data.installation}

---
  ## Usage

  ${data.usage}

---
  ## Tests

  ${data.test}

---
  ## Credits

  ${data.credits}


  ### Questions

For any question, please contact me at: 
${data.username}[https://github.com/${data.username}

---
  ## License

  ${data.license}

  
`;
}

module.exports = generateMarkdown;
