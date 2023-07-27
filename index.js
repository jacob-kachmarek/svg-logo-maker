const { Triangle, Circle, Square } = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

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

function init() {
    inquirer.prompt(questions).then((answers) => {
        const logo = renderLogo(answers);
        fs.writeFile('./examples/logo.svg', generateSVG(logo), err => {
            if (err) {
                console.log('Error occured')
            } else {
                console.log("generated")
            }
        })

    })
}

function renderLogo({ text, textColor, shape, shapeColor }) {
    let logo = null
    switch (shape) {
        case 'Circle':
            logo = new Circle(shapeColor, textColor, text)
            break;
        case 'Square':
            logo = new Square(shapeColor, textColor, text)
            break;
        case 'Triangle':
            logo = new Triangle(shapeColor, textColor, text)
            break;
    }

    logo.setColor(shapeColor);

    return logo;
}

function generateSVG(logo) {
    return `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

  ${logo.render()}

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${logo.textColor}">${logo.text}</text>

</svg>
`
}

init()