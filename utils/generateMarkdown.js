// https://shields.io/category/license liscence links are from lukas-h: license-badges.md
function renderLicenseLink(license) {
  console.log(license)
  if (license === "MIT") {
   return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  } 
  if (license === "") {
  return ""
  }
 
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${renderLicenseLink(data.license)}

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

For any question, please contact me on GitHub at [${data.username}](https://github.com/${data.username}) or by email at ${data.email}.


---
## License

${data.license}

  
`;
}

module.exports = generateMarkdown;
