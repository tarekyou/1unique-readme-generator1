// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  } else if (license === 'MIT'){
    return `![GitHub](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === 'GPL 3.0'){
    return `![GitHub](https://img.shields.io/badge/license-GPL%203.0-brightgreen)`
  } else if (license === 'Apache 2.0'){
    return `![GitHub](https://img.shields.io/badge/license-Apache%202.0-brightgreen)`
  } else if (license === 'BSD 3'){
    return `![GitHub](https://img.shields.io/badge/license-BSD%203-brightgreen)`
  } else{
    return `![GitHub]`
  }
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
  } else{
  return`* [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)    
  ${renderLicenseSection(data.license)}  
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.installInstructions}
  ## Usage
  ${data.usage}
  ## License
  ${data.license} 
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## Questions
  Created by:   <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
    data.github}">GitHub</a>
  
  Contact email: [${data.email}](${data.email})
`;

}

module.exports = generateMarkdown;
