// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  //if (licenseType === "Apache 2.0 License") {
  //  licenseString = `![License: MIT](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  //};
  //if (licenseType === "BSD 3-Clause License") {
  //  licenseString = `![License: GPL v3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  //};
  //if (licenseType === "BSD 2-Clause License") {
  //  licenseString = `![License: GPL v3](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
  //};
  if (licenseType === "Attribution 4.0 International") {
    licenseString = `![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)`
  };
  if (licenseType === "Attribution-ShareAlike 4.0 International") {
    licenseString = `![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)`
  };
  if (licenseType === "Attribution-NonCommercial 4.0 International") {
    licenseString = `![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)`
  };
  if (licenseType === "Attribution-NoDerivates 4.0 International") {
    licenseString = `![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)`
  };
  if (licenseType === "Attribution-NonCommmercial-ShareAlike 4.0 International") {
    licenseString = `![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)`
  };
  if (licenseType === "Attribution-NonCommercial-NoDerivatives 4.0 International") {
    licenseString = `![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)`
  };
  //if (licenseType === "Eclipse Public License 1.0") {
  //  licenseString = `![License:    ](https://img.shields.io/badge/License-EPL%201.0-red.svg)`
  //};
  if (licenseType === "GNU GPL v3") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
  };
  if (licenseType === "GNU GPL v2") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "GNU AGPL v3") {
    licenseString = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`
  };
  if (licenseType === "GNU LGPL v3") {
    licenseString = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`
  };
  if (licenseType === "GNU FDL v1.3") {
    licenseString = `![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)`
  };
  if (licenseType === "IBM Public License Version 1.0") {
    licenseString = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  };
  if (licenseType === "The MIT License") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseType === "Mozilla Public License 2.0") {
    licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
  };
  if (licenseType === "Attribution License (BY)") {
    licenseString = `![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)`
  };
  if (licenseType === "Open Database License (ODbL)") {
    licenseString = `![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)`
  };
  if (licenseType === "Public Domain Dedication and License (PDDL)") {
    licenseString = `![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)`
  };
  if (licenseType === "The Perl License") {
    licenseString = `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`
  };
  if (licenseType === "The Artistic License 2.0") {
    licenseString = `![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)`
  };
  if (licenseType === "The zlib/libpng License") {
    licenseString = `![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`
  };
  return licenseString
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data)}
`}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

module.exports = generateMarkdown;
