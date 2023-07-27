# svg-logo-maker

## Technology Used 
Node.js<br/>
Javascript
  
## Description 
This a simple app that allows the user to input their desired company initials and choose a shape color and text color for a logo that will be generated for them.

## Installation
npm i

## Usage 
Run node index.js and you will be prompted with a series of questions. Answer each question, when the questions conclude a logo will be generated.

## Learning Points 
N/A

## Author Info
Jacob Kachmarek
<br>[Github](https://github.com/jacob-kachmarek)
<br>[Portfolio](https://jacob-kachmarek.github.io/jacob-kachmarek-portfolio/)
<br>[Linkedin](https://www.linkedin.com/in/jacob-kachmarek/)

## Credits
N/A

## License
N/A

## Badges
N/A

## Features
N/A

## Contributing
N/A

## Tests
```javascript

describe('Circle', () => {
    describe('render()', () => {
        it('should return circle with correct color', () => {
            const shape = new Circle('none', 'none', 'none')
            shape.setColor('red')
            expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />')
        })
    })
})

describe('Square', () => {
    describe('render()', () => {
        it('should return Square with correct color', () => {
            const shape = new Square('none', 'none', 'none')
            shape.setColor('red')
            expect(shape.render()).toBe(`<rect x='50' width="200" height="200" fill="red" />`)
        })
    })
})

describe('Triangle', () => {
    describe('render()', () => {
        it('should return triangle with correct color', () => {
            const shape = new Triangle('none', 'none', 'none')
            shape.setColor('red')
            expect(shape.render()).toBe('<polygon points="150,18 244,182 56,182" fill="red" />')
        })
    })
})

```