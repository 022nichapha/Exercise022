// Shape class
class Shape {
  color: string;
  filled: boolean;

  constructor(color: string = "red", filled: boolean = true) {
    this.color = color;
    this.filled = filled;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  isFilled(): boolean {
    return this.filled;
  }

  setFilled(filled: boolean): void {
    this.filled = filled;
  }

  toString(): string {
    return `Shape[color=${this.color}, filled=${this.filled}]`;
  }
}

// Circle class
class Circle extends Shape {
  radius: number;

  constructor(radius: number = 1.0, color: string = "red", filled: boolean = true) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  toString(): string {
    return `Circle[${super.toString()}, radius=${this.radius}]`;
  }
}

// Rectangle class
class Rectangle extends Shape {
  width: number;
  length: number;

  constructor(
    width: number = 1.0,
    length: number = 1.0,
    color: string = "red",
    filled: boolean = true
  ) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getLength(): number {
    return this.length;
  }

  setLength(length: number): void {
    this.length = length;
  }

  getArea(): number {
    return this.width * this.length;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.length);
  }

  toString(): string {
    return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
  }
}

// Square class
class Square extends Rectangle {
  constructor(side: number = 1.0, color: string = "red", filled: boolean = true) {
    super(side, side, color, filled);
  }

  getSide(): number {
    return this.width;
  }

  setSide(side: number): void {
    this.width = side;
    this.length = side;
  }

  setWidth(width: number): void {
    this.setSide(width);
  }

  setLength(length: number): void {
    this.setSide(length);
  }

  toString(): string {
    return `Square[${super.toString()}]`;
  }
}
