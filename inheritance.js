class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Shape {
  constructor(name, length) {
    super(name);
    this.length = length;
  }
  getPerimeter() {
    return this.length * 4;
  }
  getArea() {
    return Math.pow(this.length, 2);
  }
}

class ShapesStore {
  constructor(shapes) {
    this.shapes = shapes;
  }
  getTotalPerimeter() {
    const rectangles = this.shapes.filter(shape => shape instanceof Rectangle);

    return rectangles.reduce(
      (totalPerimeter, rectangle) =>
        (totalPerimeter += rectangle.getPerimeter()),
      0
    );
  }
  getTotalArea() {
    const squares = this.shapes.filter(shape => shape instanceof Square);

    return squares.reduce(
      (totalArea, square) => (totalArea += square.getArea()),
      0
    );
  }
}
const rectangle = new Rectangle("rectangle", 10, 20);
const square = new Square("square", 30);

const shapesStore = new ShapesStore([rectangle, square]);
console.log(shapesStore.getTotalArea());
