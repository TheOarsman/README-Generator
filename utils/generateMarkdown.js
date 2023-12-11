
function licenseBadge(data) {
  const liceType = data.liceChoice;
  let licenseString = " "
  if (liceType === "GNU AGPLv3") {
    licenseString = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
  };
  if (liceType === "GNU GPLv3") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
  };
  if (liceType === "GNU LGPLv3") {
    licenseString = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  };
  if (liceType === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  };
  if (liceType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (liceType === "MIT License") {
    licenseString = `![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  return licenseString
};


function generateMarkdown(data) {
  return `# ${data.siteName}  ${licenseBadge(data)}

## Description

${data.description}

[${data.webAddress}](${data.webAddress})

${data.img}

## Table of Contents

1. [USER-STORY](#user-story)
2. [ACCEPTANCE-CRITERIA](#acceptance-criteria)
3. [INSTALLATION](#installation)
4. [USAGE](#usage)
5. [LICENSE](#license)  
6. [CONTRIBUTING](#contributing)
7. [TESTS](#tests)
8. [RESOURCES](#resources)
9. [QUESTIONS/CONTACT](#questions/contact)

## User-Story
   
AS ${data.as}

I WANT ${data.iWant}

SO THAT ${data.soThat}

## Acceptance-Criteria

GIVEN ${data.given}

WHEN ${data.when}

THEN ${data.then}

## Installation
      
${data.steps}

## Usage

${data.instructions}
   
## Contributing

Collaborator: ${data.collabName}

GitHub: [${data.collabGitHub}](${data.collabGitHubURL})

## License

${licenseBadge(data)}

Copyright (c) ${data.year} ${data.first} ${data.last}

## Tests

${data.tests}

## Resources

${data.resourceName}: [${data.resourceURL}](${data.resourceURL})

## Questions/Contact

Developer: ${data.first} ${data.last}

GitHub: [${data.userName}](${data.gitURL})

LinkedIn: [${data.linkedInName}](${data.linkedIn})

E-Mail: <${data.eMail}>`
}

module.exports = generateMarkdown;
