// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//These are hard coded, I see no point in making them dynamic, due to there being a limited option to pick from
function renderLicenseBadge(license) {
  switch(license){
  case 'MIT':
    return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  break;
  case 'GNU v3':
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  break;
  case 'ISC':
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  break;
  case 'No License':
    return '';
  break;
  }
}

//GENERATE MARKDOWN FOR TABLE OF CONTENTS 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(`The data reads: ${data.title}`);
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}
  
  ${data.description}

  ##Table of Contents

  -[Installation](#installation)

  -[Usage](#usage)

  -[Contribution](#contribution)

  -Test Instructions

  
  --------
  ## Installation 
  ${data.install}

  --------
  ## Usage
  ${data.usage}

  --------
  ## Contribution
  ${data.contributing}
  
  --------
  ## Test Instructions
  ${data.test} 

  --------
  ## Questions 

  Find all my other projects at [Github](https://github.com/${data.username})

  If you need to reach me please contact me at my email 

  ${data.email}
`;
}

module.exports = generateMarkdown;
