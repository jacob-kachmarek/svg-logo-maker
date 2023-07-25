//Create 'Triangle', 'Circle', and 'Square' classes
class Shape {
    constructor(fillColor, textColor, text, shape) {
        this.fillColor = fillColor;
        this.textColor = textColor;
        this.text = text;
        this.shape = shape;
    };
    setColor() {

    }
}

class Triangle extends Shape {
    //each shape class will need to be rendered
    render() {
        return "";//this method needs to return a string
    }
}

class Circle extends Shape {
    //each shape class will need to be rendered
    render() {
        return ``;//this method needs to return a string
    }

}

class Square extends Shape {
    //each shape class will need to be rendered
    render() {
        return "";//this method needs to return a string
    }

}