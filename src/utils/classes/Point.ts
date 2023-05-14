import Size from "./Size";

export default class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toSize(): Size {
    return new Size(this.x, this.y);
  }

  distance(other: Point): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y);
  }

  subtract(other: Point): Point {
    return new Point(this.x - other.x, this.y - other.y);
  }

  multiply(scalar: number): Point {
    return new Point(this.x * scalar, this.y * scalar);
  }

  divide(scalar: number): Point {
    return new Point(this.x / scalar, this.y / scalar);
  }

  dot(other: Point): number {
    return this.x * other.x + this.y * other.y;
  }

  cross(other: Point): number {
    return this.x * other.y - this.y * other.x;
  }

  static get ZERO(): Point {
    return new Point(0, 0);
  }

  static get ONE(): Point {
    return new Point(1, 1);
  }

  static get UP(): Point {
    return new Point(0, 1);
  }

  static get DOWN(): Point {
    return new Point(0, -1);
  }

  static get LEFT(): Point {
    return new Point(-1, 0);
  }

  static get RIGHT(): Point {
    return new Point(1, 0);
  }
}
