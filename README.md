# README.md Generator   ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
## Description
A command-line application that dynamically generates a README.md file from a user's input using the [Inquierer Package](https://www.npmjs.com/package/inquirer/v/8.2.4).

// Web Address to go here //

![Alt text](MRKDWN.jpg)

## Tabel on Contents
- [README.md Generator   ](#readmemd-generator---)
  - [Description](#description)
  - [Tabel on Contents](#tabel-on-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Quetsions](#quetsions)
  - [Resources](#resources)
  - [Contact](#contact)

## User Story
**AS** a developer <br>
**I WANT** a README generator <br>
**SO THAT** I can quickly create a professional README for a project

## Acceptance Criteria
**GIVEN** a command-line application that accepts user input

**WHEN** I am prompted for information about my application repository <br>
**THEN** a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

**WHEN** I enter my project title <br>
**THEN** this is displayed as the title of the README

**WHEN** I enter a description, installation instructions, usage information, contribution guidelines, and test instructions <br>
**THEN** this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

**WHEN** I choose a license for my application from a list of options <br>
**THEN** a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

**WHEN** I enter my GitHub username <br>
**THEN** this is added to the section of the README entitled Questions, with a link to my GitHub profile

**WHEN** I enter my email address <br>
**THEN** this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

**WHEN** I click on the links in the Table of Contents <br>
**THEN** I am taken to the corresponding section of the README

## Installation
1) Clone reposityory from GitHub
2) in the index.js file, on line 148, reaname "READMEtest.md" to "README.md"
3) Open an integrated terminal for the "index.js" file
4) Run "npm i" command to install all dependencies or devDependencies from the package. json file
5) Run "node index.js" to begin running Js file

## Usage

1) Verify installation steps have been completed
2) Read promps carefully, and answer each thuroughly
3) Once all promps have been answered a "README.md" file will be generated
4) Copy/Paste new "README.md" file into your project

generateMarkdown.js function for License Badges =
  [function licenseBadge(data)](https://github.com/TheOarsman/README-Generator/blob/3eca79a8bfa63ae587d0ee5f459b5adc3a14d5e2/utils/generateMarkdown.js#L2-L24)

## License
Copyright (c) Heinz Ulrich V

GitHub: [TheOarsman](www.githubg.com/TheOarsman)

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

## Contributing
N/A

## Tests

## Quetsions

## Resources

[Making Lists w/ Inquirer.js](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)

[Choose a License](https://choosealicense.com/licenses/)

[GitHub Gist](https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d)

## Contact
Developer: Heinz Ulrich V

GitHub: [TheOarsman](https://www.github.com/TheOarsman)

LinkedIn: [Heinz Ulrich V](https://www.linkedin.com/in/heinz-ulrich-v-3a3486a0/)

E-Mail: [heinzulrichv@gmail.com](heinzulrichv@gmail.com)