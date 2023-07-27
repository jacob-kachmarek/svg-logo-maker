//Create 'Triangle', 'Circle', and 'Square' classes
class Shape {
    constructor(fillColor, textColor, text) {
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
    };
    setColor(color) {
        this.fillColor = color;
    }
}

class Triangle extends Shape {
    constructor(fillColor, textColor, text) {
        super(fillColor, textColor, text)
        this.shape = 'triangle';
    }
    //each shape class will need to be rendered
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.fillColor}" />`;//this method needs to return a string
    }
}

class Circle extends Shape {
    constructor(fillColor, textColor, text) {
        super(fillColor, textColor, text)
        this.shape = 'circle';
    }
    //each shape class will need to be rendered
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;//this method needs to return a string
    }

}

class Square extends Shape {
    constructor(fillColor, textColor, text) {
        super(fillColor, textColor, text)
        this.shape = 'square';
    }
    //each shape class will need to be rendered
    render() {
        return `<rect x='50' width="200" height="200" fill="${this.fillColor}" />`;//this method needs to return a string
    }

}

module.exports = {
    Triangle,
    Circle,
    Square
}