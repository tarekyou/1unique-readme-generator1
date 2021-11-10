// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions =  (data) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleRes => {
                if (titleRes) {
                    return true;
                } else {
                    console.log('wrong selection');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'what is the description for your project?',
            validate: descriptionRes => {
                if (descriptionRes) {
                    return true;
                } else {
                    console.log('wrong selection')
                    return false;
                }
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'installConfirm',
        //     message: 'Are there instructions for installation?',
        //     default: false
        // },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'What are the instructions for installation?',
            vaildate:  installInstructionsRes => {
                if (installInstructionsRes) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this application?',
            validate: usageRes => {
                if (usageRes) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'BSD 3', 'None']
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'What are contribution guidelines?',
            validate: contributionRes => {
                if (contributionRes) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are testing instructions?',
            validate: testRes => {
                if (testRes) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your gituhub username',
            validate: githubRes => {
                if (githubRes) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        // {
        //     type: 'input',
        //     name: 'link',
        //     message: 'Please enter your project link:',
        //     validate: linkRes => {
        //         if (linkRes) {
        //             return true;
        //         } else {
        //             console.log('Please enter your github link');
        //             return false;
        //         }
        //     }
        // },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailRes => {
                if (emailRes) {
                    return true;
                } else {
                    console.log('Please enter your email adress');
                    return false;
                }
            }
        }

    ])
};    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/Readme.md', fileContent, err =>{
            if(err){
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    });
};
// questions()
// .then(generateMarkdown)
// .then(fileContent=>{return writeFile(fileContent)})
// .catch(err=> {console.log(err)})
// TODO: Create a function to initialize app
function init() {
    questions()
.then(generateMarkdown)
.then(fileContent=>{return writeFile(fileContent)})
.catch(err=> {console.log(err)})
}

// Function call to initialize app
init();
