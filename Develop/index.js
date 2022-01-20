const pageTemplate = require("./src/page-template")

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const inquirer = require("inquirer");
const { validationCondition } = require("jest-validate/build/condition");
const { validate } = require("@babel/types");


const teamArr = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager for this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }else {
                    console.log("Please enter a name");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the manager ID',
            validate: idInput => {
                if (idInput) {
                    return true;
                }else {
                    console.log("Please enter an ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }else {
                    console.log("Please enter an email address");
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the managers office number',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the managers office number");
                    return false;
                }
            }
        }
    ]) 
    .then(managerInput => {
        const {name,id,email,officeNumber} = managerInput;
        const manager = new Manager (name,id,email,officeNumber);
        teamArr.push(manager);
        console.log(manager);
    })
    
};
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type:'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer','Intern', 'No more employees to add'],
            // validate: roleInput => {
            //     if (roleInput === 'Engineer') {
            //         return true;
            //     } else if (roleInput === 'Intern') {
            //         return true;
            //     } else {

            //     }
            // }
            
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee Id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employees email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        }

    ])
}
addManager();