const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//type, message , name
const questions = [
  {
    type: 'input',
    message: 'What is your Project Title? ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please Enter the Description',
    name: 'description',
  },
  {
    type: 'input',
    message: "Please Enter Installation Instructions: ",
    name: 'install',
  },
  {
    type: 'input',
    message: "Please Enter Usage Instructions: ",
    name: 'usage',
  },
  {
    type: 'input',
    message: "Please Enter Contribution Guidelines: ",
    name: 'contributing',
  },
  {
    type: 'input',
    message: "Please Enter Test Instructions: ",
    name: 'test',
  },
  {
    type: 'input',
    message: "Please Enter Github Username: ",
    name: 'username',
  },
  {
    type: 'input',
    message: "Please Enter Your Email: ",
    name: 'email',
  },
  {
    type: 'list',
    message: 'Please Pick a License',
    name: 'license',
    choices: ['GNU v3','MIT','ISC','No License'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // console.log(generateMarkdown(data));
  fs.writeFile(fileName,generateMarkdown(data),(err) =>
  err ? console.log(err) : console.log('Success!')
  );
}

function init() {

  inquirer.prompt(questions)

 .then((data) =>
    writeToFile('README.md',data))
  
}

init();

