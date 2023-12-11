
function licenseBadge(data) {
  const liceType = data.liceChoice;
  let licenseString = " "
  if (liceType === "GNU AGPLv3") {
    licenseString = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)
    
    https://choosealicense.com/licenses/agpl-3.0/`
  };
  if (liceType === "GNU GPLv3") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)
    
    https://choosealicense.com/licenses/gpl-3.0/`
  };
  if (liceType === "GNU LGPLv3") {
    licenseString = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)
    
    https://choosealicense.com/licenses/lgpl-3.0/`
  };
  if (liceType === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)
    
    https://choosealicense.com/licenses/mpl-2.0/`
  };
  if (liceType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
    
    https://choosealicense.com/licenses/apache-2.0/`
  };
  if (liceType === "MIT License") {
    licenseString = `![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)
    
    https://choosealicense.com/licenses/mit/`
  };
  return licenseString
};


function generateMarkdown(data) {
  return `# ${data.siteName}  ${licenseBadge(data)}

## DESCRIPTION

${data.description}

[${data.webAddress}](${data.webAddress})

${data.img}

## TABLE OF CONTENTS

1. [USER-STORY](#user-story)
2. [ACCEPTANCE-CRITERIA](#acceptance-criteria)
3. [INSTALLATION](#installation)
4. [USAGE](#usage)
5. [LICENSE](#license)  
6. [CONTRIBUTING](#contributing)
7. [TESTS](#tests)
8. [QUESTIONS](#questions)
9. [RESOURCES](#resources)
10. [CONTACT](#contact)

## USER-STORY
   
AS ${data.as}

I WANT ${data.iWant}

SO THAT ${data.soThat}

## ACCEPTANCE-CRITERIA

GIVEN ${data.given}

WHEN ${data.when}

THEN ${data.then}

## INSTALLATION
      
${data.steps}

## USAGE

${data.instructions}
   
## CONTRIBUTING

Collaborator: ${data.collabName}

GitHub: [${data.collabGitHub}](${data.collabGitHubURL})

## LICENSE

Copyright (c) ${data.first} ${data.last}

${licenseBadge(data)}

## TESTS

${data.tests}

## QUESTIONS

${data.question}

## RESOURCES

${data.resourceName}: [${data.resourceURL}](${data.resourceURL})

## CONTACT

Developer: ${data.first} ${data.last}

GitHub: [${data.userName}](${data.gitURL})

LinkedIn: [${data.linkedInName}](${data.linkedIn})

E-Mail: <${data.eMail}>`
}

module.exports = generateMarkdown;
