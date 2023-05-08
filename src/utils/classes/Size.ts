import Point from './Point';

export default class Size {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  toPoint(): Point {
    return new Point(this.width, this.height);
  }

  add(other: Size): Size {
    return new Size(this.width + other.width, this.height + other.height);
  }

  subtract(other: Size): Size {
    return new Size(this.width - other.width, this.height - other.height);
  }

  multiply(scalar: number): Size {
    return new Size(this.width * scalar, this.height * scalar);
  }

  divide(scalar: number): Size {
    return new Size(this.width / scalar, this.height / scalar);
  }

  aspectRatio(): number {
    return this.height / this.width;
  }
}
