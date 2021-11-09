// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  return``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  }
  return``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return '';
  }
  return``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![GitHub](https://img.shields.io/github/license/${data.github}/${data.title})
  # ${data.title}
  ## Description
  ${data.about}
  ## Table of Contents
  
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  
  ## Usage
  ${data.usage}
  ## License
  ${data.license} 
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  Created by: [${data.github}](${data.link})
  
  Contact email: [${data.email}](${data.email})
`;

}

module.exports = generateMarkdown;
