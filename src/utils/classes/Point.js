import Size from "./Size";

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toSize() {
    return new Size(this.x, this.y);
  }

  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }

  subtract(other) {
    return new Point(this.x - other.x, this.y - other.y);
  }

  multiply(scalar) {
    return new Point(this.x * scalar, this.y * scalar);
  }

  divide(scalar) {
    return new Point(this.x / scalar, this.y / scalar);
  }

  dot(other) {
    return this.x * other.x + this.y * other.y;
  }

  cross(other) {
    return this.x * other.y - this.y * other.x;
  }

  static get ZERO() {
    return new Point(0, 0);
  }

  static get ONE() {
    return new Point(1, 1);
  }

  static get UP() {
    return new Point(0, 1);
  }

  static get DOWN() {
    return new Point(0, -1);
  }

  static get LEFT() {
    return new Point(-1, 0);
  }

  static get RIGHT() {
    return new Point(1, 0);
  }
}
