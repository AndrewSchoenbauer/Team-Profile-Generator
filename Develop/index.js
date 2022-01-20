const pageTemplate = require("./src/page-template")

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const inquirer = require("inquirer");



const team = [];

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
        },
        {
            type:'list',
            name: 'newMember',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer','Intern', 'No more employees to add'],
            
        }

    ]) 
    .then((managerInput) => {
        const {name,id,email,officeNumber,newMember} = managerInput;
        const manager = new Manager (name,id,email,officeNumber)
        team.push(manager)
        switch(newMember) {
            case 'Engineer':
                engineerQues();
                break;
            case 'Intern' :
                internQues();
                break;
            default:
                writeToFile('dist/index.html', pageTemplate(team))
        }
    })
    
};
const engineerQues = () => {
    return inquirer.prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
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
            message: 'Please enter the employee Id of the engineer',
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
            message: 'Please enter the engineer\'s email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineer\'s GitHub username',
            validate: gitHubInput => {
                if(gitHubInput){
                    return true;
                }else {
                    console.log("Please enter a username");
                    return false;
                }
            }
        },
        {
            type:'list',
            name: 'newMember',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer','Intern', 'No more employees to add'],
            
        }

    ])
    .then(engineerInput => {
        const {name,id,email,github,newMember} = engineerInput;
        const engineer = new Engineer (name,id,email,github);
        team.push(engineer);
        switch(newMember) {
            case 'Engineer':
                engineerQues();
                break;
            case 'Intern' :
                internQues();
                break;
            default:
                writeToFile('dist/index.html', pageTemplate(team))
        }

    })
}
const internQues = () => {
    return inquirer.prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
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
            message: 'Please enter the employee Id of the intern',
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
            message: 'Please enter the intern\'s email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school the intern attends',
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                }else {
                    console.log("Please enter a school");
                    return false;
                }
            }
        },
        {
            type:'list',
            name: 'newMember',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer','Intern', 'No more employees to add'],
            
        }
    ])
    .then(internInput => {
        const {name,id,email,school,newMember} = internInput;
        const intern = new Intern (name,id,email,school)
        team.push(intern);
        switch(newMember) {
            case 'Engineer':
                engineerQues();
                break;
            case 'Intern':
                internQues();
                break;
            default:
                writeToFile('dist/index.html', pageTemplate(team))
        }

    })
}
addManager();
function writeToFile(filename,data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log("Your team has been generated succesfully!");
    })
}