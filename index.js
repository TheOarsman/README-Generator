const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ title, description, webAddress, img, as, iWant, soThat, given, when, then, userName, url, linkedIn, eMail, collabName, collabGitHub }) =>
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
      <h3>Example heading <span class="badge bg-secondary">DESCRIPTION</span></h3>
      <h2 class="webAddress">${webAddress}</h2>
      <p class="lead">${description}.</p>

      <h3>Example heading <span class="badge bg-secondary">TABLE OF CONTENTS</span></h3>
      <ul class="list-group">
        <li class="list-group-item"><a id="usage">USAGE</a></li>
        <li class="list-group-item">USER STORY</li>
        <li class="list-group-item">ACEEPTANCE CRITERIA</li>
        <li class="list-group-item">LICENSE</li>  
        <li class="list-group-item">CONTRIBUTING</li> 
        <li class="list-group-item">TESTS</li>
        <li class="list-group-item">QUESTIONS</li>
        <li class="list-group-item">RESOURCES</li>
        <li class="list-group-item">CONTACT ME</li>
        <li class="list-group-item">COLLABORATORS</li>
      </ul>

      <h3>Example heading <span class="badge bg-secondary"><a href="#usage">USAGE</a></span></h3>
      <p class="container">${img}</p>
      <h3>Example heading <span class="badge bg-secondary">INSTALLATION</span></h3>
      <ul class="list-group">
        <li class="list-group-item">AS ${    }</li>
      </ul>

      <h3>Example heading <span class="badge bg-secondary">USER STORY</span></h3>
      <ul class="list-group">
        <li class="list-group-item">AS ${as}</li>
        <li class="list-group-item">I WANT ${iWant}</li>
        <li class="list-group-item">SO THAT ${soThat}</li>
      </ul>

      <h3>Example heading <span class="badge bg-secondary">ACCEPTANCE CRITERIA</span></h3>
      <ul class="list-group">
        <li class="list-group-item">GIVEN ${given}</li>
        <li class="list-group-item">WHEN ${when}</li>
        <li class="list-group-item">THEN ${then}</li>
      </ul>

      <h3>Example heading <span class="badge bg-secondary">CONTACT ME</span></h3>
      <ul class="list-group">
        <li class="list-group-item">GitHub Username: ${userName}</li>
        <li class="list-group-item">GitHub URL: ${url}</li>
        <li class="list-group-item">LinkedIn: ${linkedIn}</li>
        <li class="list-group-item">E-Mail: ${eMail}</li>
      </ul>

      <h3>Example heading <span class="badge bg-secondary">COLLABORATOR(S)</span></h3>
      <ul class="list-group">
        <li class="list-group-item">Collaborator Name: ${collabName}</li>
        <li class="list-group-item">Collaborator GitHub: ${collabGitHub}</li>
      </ul>
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
            message: 'What is the web address to your site ? (copy and paste URL)',
        },
        {
            type: 'input',
            name: 'img',
            message: 'Paste an image of your web page.',
        },
        {
            type: 'input',
            name: 'as',
            message: 'Creating your User Story: What is your User Story? (1 - AS..., 2 - I WANT..., 3 - SO THAT...) Part 1 of 3: Finish the "AS" statement (DO NOT USE THE WORD "AS" AT THE BEGINING OF YOUR STATEMENT',
        },
        {
            type: 'input',
            name: 'iWant',
            message: 'Creating your User Story: What is your User Story? (1 - AS..., 2 - I WANT..., 3 - SO THAT...) Part 2 of 3: Finish the "I WANT" statement (DO NOT USE THE WORDS "I WANT" AT THE BEGINING OF YOUR STATEMENT',
        },
        {
            type: 'input',
            name: 'soThat',
            message: 'Creating your User Story: What is your User Story? (1 - AS..., 2 - I WANT..., 3 - SO THAT...) Part 3 of 3: Finish the "SO THAT" statement (DO NOT USE THE WORDS "SO THAT" AT THE BEGINING OF YOUR STATEMENT',
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
        {
            type: 'input',
            name: 'acceptanceCriteria',
            message: 'What is the Acceptance Criteria? (Given..., When..., Then...)',
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'url',
            message: 'Enter your GitHub URL.',
        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'Enter your LinkedIn URL.',
        },
        {
            type: 'input',
            name: 'eMail',
            message: 'Enter your E-Mail address.',
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
        }
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
