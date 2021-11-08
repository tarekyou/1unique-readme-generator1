// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? required',
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
            message: 'what is the description for your project? required',
            validate: descriptionRes => {
                if (descriptionRes) {
                    return true;
                } else {
                    console.log('wrong selection')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'installConfirm',
            message: 'Are there instructions for installation?',
            default: false
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'What are the instructions for installation?',
            when: ({ installConfirm }) => {
                if (installConfirm) {
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
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC']
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
        {
            type: 'input',
            name: 'link',
            message: 'Please enter your github link:',
            validate: linkRes => {
                if (linkRes) {
                    return true;
                } else {
                    console.log('Please enter your github link');
                    return false;
                }
            }
        },
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

// TODO: Create a function to initialize app
function init() {
    // questions();
}

// Function call to initialize app
init();
