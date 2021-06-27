const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./src/file-template');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Github username? (Required)',
            validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter your username!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: (emailInput) => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter your email!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name? (Required)',
            validate: (projectNameInput) => {
                if (projectNameInput) {
                  return true;
                } else {
                  console.log("Please enter your project name!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log("Please enter a description!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter instructions for installation. (Required)',
            validate: (installationInput) => {
                if (installationInput) {
                  return true;
                } else {
                  console.log("Please enter instructions!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter information about usage. (Required)',
            validate: (usageInput) => {
                if (usageInput) {
                  return true;
                } else {
                  console.log("Please enter usage information!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter guidelines for contributing. (Required)',
            validate: (contributionInput) => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log("Please enter guidelines!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter instructions for testing. (Required)',
            validate: (testsInput) => {
                if (testsInput) {
                  return true;
                } else {
                  console.log("Please enter instructions!");
                  return false;
                }
            }
        },
        {
          type: 'list',
          name: 'licenses',
          message: 'Choose a license. (Required)',
          choices: [
            'Apache',
            'MIT',
            'GNU',
            'None'
          ],
        }
    ])
};



promptUser()
    .then((readMeData) => {
        console.log(readMeData);
        const readMe = generateFile(readMeData);

        fs.writeFile('./user-readme/README.md', readMe, err => {
           if (err) throw new Error(err);

           console.log('File created! Check out README.md in this directory to see it!');
        });
    });