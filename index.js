function init() {

    const inquirer = require('inquirer');
    const fs = require('fs');
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'siteName',
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
                message: 'Copy/Paste the URL to your site (be sure to have "https://" at the start of the address)',
            },
            {
                type: 'input',
                name: 'img',
                message: 'Insert an image/screenshot of your web page (NOTE: IMG should already be in your images folder, or somewhere already in your project. IMG should be JPG. Enter "![Alt text]" followed by the IMG file name as it is titled in your project)',
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
                message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (If you are making a numbered list, type "1.", type the step, then add "<br>" before going to the next step and number)',
            },
            {
                type: 'input',
                name: 'instructions',
                message: 'Provide instructions and examples for use. Include screenshots and/or "code example(s)" as needed. (If you are making a numbered list, type "1.", type the step, then add "<br>" before going to the next step and number)',
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
                message: `Copy/Paste the URL to the GitHub Profile of who you collaborated with (be sure to have "https://" at the start of the address)`,
            },
            {
                type: `rawlist`,
                name: `liceChoice`,
                message: `What kind of licensing do you want applied to your project? NOTE: Use the Up/Down arrows to navigate through the list, type the number option then press "Enter", or highlight your selection and press "Enter", to select your choice.`,
                choices: [`GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`],
            },
            {
                type: `input`,
                name: `year`,
                message: `Enter the curent, 4-digit, year for copyright/licensing`,
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
                type: `input`,
                name: `tests`,
                message: `What tests do you have for this application?`,
            },
            {
                type: `input`,
                name: `resourceName`,
                message: `What resource(s) did you use to create your project? (Insert WebPage Name)`,
            },
            {
                type: `input`,
                name: `resourceURL`,
                message: `Copy/Paste URL of the resource used (be sure to have "https://" at the start of the address)`,
            },
            {
                type: 'input',
                name: 'userName',
                message: 'Enter your GitHub Username.',
            },
            {
                type: 'input',
                name: 'gitURL',
                message: 'Copy/Paste your GitHub Profile URL (be sure to have "https://" at the start of the address)',
            },
            {
                type: 'input',
                name: 'linkedIn',
                message: 'Copy/Paste your LinkedIn URL (be sure to have "https://" at the start of the address)',
            },
            {
                type: `input`,
                name: `linkedInName`,
                message: `What is your display name on LinkedIn?`
            },
            {
                type: 'input',
                name: 'eMail',
                message: 'Enter your E-Mail address.'
            },
        ])
        .then((response) => {
            return fs.writeFileSync(path.join (process.cwd(), "READMEtest.md"), generate(response));
        });
}

init();