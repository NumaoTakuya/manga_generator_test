import Point from './Point';

export default class Size {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toPoint() {
    return new Point(this.width, this.height);
  }

  add(other) {
    return new Size(this.width + other.width, this.height + other.height);
  }

  subtract(other) {
    return new Size(this.width - other.width, this.height - other.height);
  }

  multiply(scalar) {
    return new Size(this.width * scalar, this.height * scalar);
  }

  divide(scalar) {
    return new Size(this.width / scalar, this.height / scalar);
  }

  aspectRatio() {
    return this.height / this.width;
  }
}
