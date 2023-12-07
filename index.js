const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');
const path = require('path');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your Web Page?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Give a brief description of your REPO. Ideas for description: What was your motivation? Why did you build this REPO? What problem(s), if any, did it solve? What did you learn?',
            },
            {
                type: 'input',
                name: 'webAddress',
                message: 'Copy/Paste the URL to your site',
            },
            {
                type: 'input',
                name: 'img',
                message: 'Paste an image of your web page.',
            },
            {
                type: 'input',
                name: 'as',
                message: 'Creating your User Story: What is your User Story? [1 - AS..., 2 - I WANT..., 3 - SO THAT...] Part 1 of 3: Finish the "AS" statement (DO NOT USE THE WORD "AS" AT THE BEGINING OF YOUR STATEMENT)',
            },
            {
                type: 'input',
                name: 'iWant',
                message: 'Creating your User Story: What is your User Story? [1 - AS..., 2 - I WANT..., 3 - SO THAT...] Part 2 of 3: Finish the "I WANT" statement (DO NOT USE THE WORDS "I WANT" AT THE BEGINING OF YOUR STATEMENT)',
            },
            {
                type: 'input',
                name: 'soThat',
                message: 'Creating your User Story: What is your User Story? [1 - AS..., 2 - I WANT..., 3 - SO THAT...] Part 3 of 3: Finish the "SO THAT" statement (DO NOT USE THE WORDS "SO THAT" AT THE BEGINING OF YOUR STATEMENT)',
            },
            {
                type: 'input',
                name: 'given',
                message: 'What is the Acceptance Criteria? [Given..., When..., Then...] Part 1 of 3: Finish the "GIVEN" statement (DO NOT USE THE WORD "GIVEN" AT THE BEGINING OF YOUR STATEMENT)',
            },
            {
                type: 'input',
                name: 'when',
                message: 'What is the Acceptance Criteria? [Given..., When..., Then...] Part 2 of 3: Finish the "WHEN" statement (DO NOT USE THE WORD "WHEN" AT THE BEGINING OF YOUR STATEMENT)',
            },
            {
                type: 'input',
                name: 'then',
                message: 'What is the Acceptance Criteria? [Given..., When..., Then...] Part 3 of 3: Finish the "THEN" statement (DO NOT USE THE WORD "THEN" AT THE BEGINING OF YOUR STATEMENT)',
            },
            {
                type: 'input',
                name: 'steps',
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'input',
                name: 'instructions',
                message: 'Provide instructions and examples for use. Include screenshots and/or "code example(s)" as needed.',
            },
            {
                type: 'input',
                name: 'collabName',
                message: 'List the name of who you collaborated with. If none, enter "N/A"',
            },
            {
                type: `input`,
                name: `collabGitHub`,
                message: `List the GitHub Profile Name of who you collaborated with. If none, enter "N/A"`,
            },
            {
                type: `input`,
                name: `collabGitHubURL`,
                message: `Copy/Paste the URL to the GitHub Profile of who you collaborated with`,
            },
            {
                type: `input`,
                name: `first`,
                message: `Enter your First name as you would like displayed for copyright/licensing`,
            },
            {
                type: `input`,
                name: `last`,
                message: `Enter your Last name as you would like displayed for copyright/licensing`,
            },
            {
                type: `rawlist`,
                name: `license`,
                message: `What kind of licensing do you want applied to your project? NOTE: Use the Up/Down arrows to navigate through the list, type the number option then press "Enter", or highlight your selection and press "Enter", to select your choice.`,
                choices: [`Apache 2.0 License`, `BSD 3-Clause License`, `BSD 2-Clause License`, `Attribution 4.0 International`, `Attribution-ShareAlike 4.0 International`, `Attribution-NonCommercial 4.0 International`, `Attribution-NoDerivates 4.0 International`, `Attribution-NonCommmercial-ShareAlike 4.0 International`, `Attribution-NonCommercial-NoDerivatives 4.0 International`, `Eclipse Public License 1.0`, `GNU GPL v3`, `GNU GPL v2`, `GNU AGPL v3`, `GNU LGPL v3`, `GNU FDL v1.3`, `IBM Public License Version 1.0`, `The MIT License`, `Mozilla Public License 2.0`, `Attribution License (BY)`, `Open Database License (ODbL)`, `Public Domain Dedication and License (PDDL)`, `The Perl License`, `The Artistic License 2.0`, `The zlib/libpng License`],
            },
            {
                type: `input`,
                name: `tests`,
                message: `What tests do you have for this application?`,
            },
            {
                type: `input`,
                name: `question`,
                message: `What quetsions are there to ask?`,
            },
            {
                type: `input`,
                name: `resourceName`,
                message: `What resource(s) did you use to create your project? (Insert Name)`,
            },
            {
                type: `input`,
                name: `resourceURL`,
                message: `Copy/Paste URL of the resource used`,
            },
            {
                type: 'input',
                name: 'userName',
                message: 'Enter your GitHub Username.',
            },
            {
                type: 'input',
                name: 'gitURL',
                message: 'Copy/Paste your GitHub Profile URL.',
            },
            {
                type: 'input',
                name: 'linkedIn',
                message: 'Copy/Paste your LinkedIn URL.',
            },
            {
                type: `input`,
                name: `linkedInName`,
                message: `What is your display name on LinkedIn?`
            },
            {
                type: 'input',
                name: 'eMail',
                message: 'Enter your E-Mail address.',
            },
        ])
        .then((answers) => {
            const markdownContent = generateREADME(answers);

            fs.writeFile('example.md', markdownContent, (err) =>
                err ? console.log(err) : console.log('Successfully created example.md')
            );
        });
}
// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
const generateREADME = ({ title, description, webAddress, img, as, iWant, soThat, given, when, then, steps, instructions, collabName, collabGitHub, collabGitHubURL, first, last, license, tests, question, resourceName, resourceURL, userName, gitURL, linkedIn, linkedInName, eMail, licenseBadge }) =>
`
# ${title}

### DESCRIPTION

${description}

##### [${webAddress}](${webAddress})

<img class="container">${img}</img>

## TABLE OF CONTENTS

 1. [USER STORY](#userStory)
 2. [ACEEPTANCE CRITERIA](#acceptCrit)
 3. [INSTALLATION](#installation)
 4. [USAGE](#usage)
 5. [LICENSE](#license)  
 6. [CONTRIBUTING](#contributing)
 7. [TESTS](#tests)
 8. [QUESTIONS](#questions)
 9. [RESOURCES](#resources)
 10. [CONTACT ME](#contactMe)

## USER STORY
   
AS ${as}
I WANT ${iWant}
SO THAT ${soThat}

## ACCEPTANCE CRITERIA</h3>

GIVEN</b> ${given}</li>
WHEN</b> ${when}</li>
THEN</b> ${then}</li>

## INTALLATION
      
${steps}

### USAGE

${instructions}
   
## CONTRIBUTING</h3>

Collaborator Name: ${collabName}</li>
Collaborator GitHub: ${collabGitHub}: <a href="${collabGitHubURL}"></li>

## LICENSE

Copyright (c) ${first} ${last} (GitHub: [${gitURL}](${userName}) Licensed under the ${license} license. ${licenseBadge}

## TESTS

${tests}

## QUESTIONS

${question}

## RESOURCES

${resourceName}: [${resourceURL}](${resourceURL})

## CONTACT

GitHub: [${gitURL}](${userName})
LinkedIn: [${linkedIn}](${linkedInName})
E-Mail: [${eMail}](${eMail})
`

init();