// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// FIX THIS
// https://shields.io/category/license liscence links are from lukas-h: license-badges.md
function renderLicenseLink(license) {
  if (license === "MIT") {
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "Apache") {
"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === "ISC") {
"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } 
  if (license === "") {
""
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

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
  - [Tests](#tests)
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

For any question, please contact me on GitHub at [${data.username}](https://github.com/${data.username}) or by email at <${data.email}>.


---
  ## License

  ${data.license}

  
`;
}

module.exports = generateMarkdown;
