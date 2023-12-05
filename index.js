const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ title, description, webAddress, img, as, iWant, soThat, given, when, then, steps, userName, instructions, collabName, collabGitHub,, collabGitHubURL, license, tests, question, resourceName, resourceURL, userName, gitURL, linkedIn, eMail }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>README</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">${title}</h1>

      <br>
    
      <h3>DESCRIPTION</span></h3>
      <p class="lead">${description}.</p>
      <h5 class="webAddress">${webAddress}</h5>

      <br>

      <p class="container">${img}</p>

      <br>

      <h3>TABLE OF CONTENTS</span></h3>
      <ul class="list-group">
        <li class="list-group-item"><a href="#userStory">USER STORY</li>
        <li class="list-group-item"><a href="#acceptCrit">ACEEPTANCE CRITERIA</li>
        <li class="list-group-item"><a href="#installation">INSTALLATION</li>
        <li class="list-group-item"><a href="#usage">USAGE</a></li>
        <li class="list-group-item"><a href="#license">LICENSE</li>  
        <li class="list-group-item"><a href="#contributing">CONTRIBUTING</li> 
        <li class="list-group-item"><a href="#tests">TESTS</li>
        <li class="list-group-item"><a href="#questions">QUESTIONS</li>
        <li class="list-group-item"><a href="#resources">RESOURCES</li>
        <li class="list-group-item"><a href="#contactMe">CONTACT ME</li>
      </ul>

      <br>

      <h3><a id="userStory">USER STORY</h3>
      <ul class="list-group">
        <li class="list-group-item">AS ${as}</li>
        <li class="list-group-item">I WANT ${iWant}</li>
        <li class="list-group-item">SO THAT ${soThat}</li>
      </ul>
      
      <br>

      <h3><a id="acceptCrit">ACCEPTANCE CRITERIA</h3>
      <ul class="list-group">
        <li class="list-group-item">GIVEN ${given}</li>
        <li class="list-group-item">WHEN ${when}</li>
        <li class="list-group-item">THEN ${then}</li>
      </ul>

      <br>

      <h3><a id="installation">INTALLATION</h3>
      <ul class="list-group">
        <li class="list-group-item">${steps}</li>
      </ul>

      <br>

      <h3><a id="usage">USAGE</a></h3>
      <h3>INSTALLATION</span></h3>
      <ul class="list-group">
        <li class="list-group-item">${instructions}</li>
      </ul>

      <br>

      <h3><a id="contributing">CONTRIBUTING</h3>
      <ul class="list-group">
        <li class="list-group-item">Collaborator Name: ${collabName}</li>
        <li class="list-group-item">Collaborator GitHub: ${collabGitHub}: <a href="${collabGitHubURL}"></li>
      </ul>

      <br>

      <h3><a id="license">LICENSE</h3>
      <ul class="list-group">
        <li class="list-group-item">${license}</li>
      </ul>

      <br>

      <h3><a id="tests">TESTS</h3>
      <ul class="list-group">
        <li class="list-group-item">${tests}</li>
      </ul>

      <br>

      <h3><a id="questions">QUESTIONS</h3>
      <ul class="list-group">
        <li class="list-group-item">${question}</li>
      <br>

      <h3><a id="resources">RESOURCES</h3>
      <ul class="list-group">
        <li class="list-group-item">${resourceName}</li>
        <li class="list-group-item"><a href="${resourceURL}"></li>
      </ul>

      <br>
      
      <h3><a id="contactMe">CONTACT ME</h3>
      <ul class="list-group">
        <li class="list-group-item">GitHub: ${userName}: <a href="${gitURL}"></li>
        <li class="list-group-item">LinkedIn: <a href="${linkedIn}"></li>
        <li class="list-group-item">E-Mail: ${eMail}</li>
      </ul>

      <br>

    </div>
  </header>
</body>
</html>`;

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
            message: 'Give a brief description of your REPO',
        },
        {
            type: 'input',
            name: 'webAddress',
            message: 'What is the web address to your site? (copy/paste URL)',
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
            name: 'instrutions',
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
            message: `List the GitHub Profile Name of who you collaborated with. If none, enter "N/A"`
        },
        {
            type: `input`,
            name: `collabGitHubURL`,
            message: `Copy/Paste the URL to the GitHub Profile of who you collaborated with`
        },
        {
            type: `input`,
            name: `license`,
            message: `What kind of licensing do you want applied to your project?`
        },
        {
            type: `input`,
            name: `tests`,
            message: `What tests do you have for this application?`
        },
        {
            type: `input`,
            name: `question`,
            message: `What quetsions are there to ask?`
        },
        {
            type: `input`,
            name: `resourceName`,
            message: `What resource(s) did you use to create your project? (Insert Name)`
        },
        {
            type: `input`,
            name: `resourceURL`,
            message: `Copy/Paste URL of the resource used`
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
            type: 'input',
            name: 'eMail',
            message: 'Enter your E-Mail address.',
        },
        {
            type: 'input',
            name: 'motive',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'reason',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'problemSolved',
            message: 'What problem does this solve?',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
