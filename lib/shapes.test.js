const { Circle, Square, Triangle } = require('./shapes')

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