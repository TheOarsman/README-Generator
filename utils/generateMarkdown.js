// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "Apache 2.0 License") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GNU AGPL v3") {
    licenseString = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
  };
  if (licenseType === "GNU LGPL v3") {
    licenseString = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  };
  if (licenseType === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  };
  return licenseString
};

function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data)}
`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

module.exports = generateMarkdown;
