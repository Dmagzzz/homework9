// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === "MIT" ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## description

${data.description}

## table of contents

[installations](#installations)

[license](#license)

[contributing](#contributing)

[tests](#tests)

[questions](#questions)

## installations

${data.installations}

## license

${renderLicenseLink(data.license)} 

## contributing

${data.contributing}

## tests

${data.tests}

## questions

${data.questions}

`;
}

module.exports = generateMarkdown;