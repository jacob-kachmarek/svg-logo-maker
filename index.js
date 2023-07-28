const { Triangle, Circle, Square } = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');
//array of objects that define the questions the user will be prompted to answer
const questions = [
    {
        type: 'input',
        message: 'Enter 1-3 characters for your logo.',
        name: 'text',
        // checks if input is up to 3 characters
        validate: function (input) {
            if (input.length > 3) {
                console.log('No more than 3 characters')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter text color',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Enter logo shape',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter shape color',
        name: 'shapeColor'
    }
];
//Function that initializes the app which and prompts the user with the questions inside the questions array
function init() {
    inquirer.prompt(questions).then((answers) => {
        //Creates variable logo who's value runs a function based on the answers provided by the user
        const logo = renderLogo(answers);
        //Writes the logo to the examples folder. Uses the generate logo function to make the logo 
        fs.writeFile('./examples/logo.svg', generateSVG(logo), err => {
            //Error-first callback that will print to the console whether or not the process succeeded or not
            if (err) {
                console.log('Error')
            } else {
                console.log('SVG Logo Generated')
            }
        })

    })
};
//Function to render the logo based on the users input. Takes object as an argument.
function renderLogo({ text, textColor, shape, shapeColor }) {
    //Create logo variable and set its value to null initially
    let logo = null
    //Switch case that determines the shape of the svg being generated
    //Making sure that if the user inputs capital letters it all goes to lowercase
    switch (shape.toLowerCase()) {
        case 'circle':
            logo = new Circle(shapeColor, textColor, text)
            break;
        case 'square':
            logo = new Square(shapeColor, textColor, text)
            break;
        case 'triangle':
            logo = new Triangle(shapeColor, textColor, text)
            break;
    }
    //Setting color the the specified shapeColor
    logo.setColor(shapeColor);

    return logo;
};
//Creates the SVG logo
function generateSVG(logo) {
    //Returns a template literal that establishes the svg html that is going to be written to file.
    //Will change based on the choices made by the user as indicated by the ${} notation
    return `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

  ${logo.render()}

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${logo.textColor}">${logo.text}</text>

</svg>
`
};

init()