
function licenseBadge(data) {
  const liceType = data.liceChoice[0];
  let licenseString = ""
  if (liceType === "GNU AGPL v3") {
    licenseString = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
  };
  if (liceType === "GNU LGPL v3") {
    licenseString = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  };
  if (liceType === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  };
  return licenseString
};

function generateMarkdown(data) {
  return `# ${data.siteName}

### DESCRIPTION

${data.description}

##### [${data.webAddress}](${data.webAddress})

<img class="container">${data.img}</img>

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

Collaborator Name: ${data.collabName}
Collaborator GitHub: [${data.collabGitHub}](${data.collabGitHubURL})

## LICENSE

Copyright (c) ${data.first} ${data.last}, GitHub: [${data.gitURL}](${data.userName}), Licensed under the ${data.liceChoice} license. ${licenseBadge(data)}

## TESTS

${data.tests}

## QUESTIONS

${data.question}

## RESOURCES

${data.resourceName}: [${data.resourceURL}](${data.resourceURL})

## CONTACT

GitHub: [${data.gitURL}](${data.userName})
LinkedIn: [${data.linkedIn}](${data.linkedInName})
E-Mail: [${data.eMail}](${data.eMail})`
}

module.exports = generateMarkdown;
