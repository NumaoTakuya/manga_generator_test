import Point from "./Point";
import Size from "./Size";

export default class Rect {
  left: number;
  top: number;
  width: number;
  height: number;

  constructor(left: number, top: number, width: number, height: number) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  static get ZERO(): Rect {
    return new Rect(0, 0, 0, 0);
  }

  get size(): Size {
    return new Size(this.width, this.height);
  }

  get point(): Point {
    return new Point(this.left, this.top);
  }

  get right(): number {
    return this.left + this.width;
  }

  get bottom(): number {
    return this.top + this.height;
  }

  get area(): number {
    return this.width * this.height;
  }

  get center(): Point {
    return new Point(this.left + this.width / 2, this.top + this.height / 2);
  }

  move(x: number, y: number): Rect {
    return new Rect(this.left + x, this.top + y, this.width, this.height);
  }

  resize(width: number, height: number): Rect {
    return new Rect(this.left, this.top, width, height);
  }

  scale(scaleX: number, scaleY: number): Rect {
    return new Rect(
      this.left * scaleX,
      this.top * scaleY,
      this.width * scaleX,
      this.height * scaleY
    );
  }

  fitInto(size: Size): Rect {
    const aspectRatio = this.width / this.height;
    const targetAspectRatio = size.width / size.height;
    if (aspectRatio > targetAspectRatio) {
      const targetWidth = size.width;
      const targetHeight = size.width / aspectRatio;
      return new Rect(
        (size.width - targetWidth) / 2,
        (size.height - targetHeight) / 2,
        targetWidth,
        targetHeight
      );
    } else {
      const targetWidth = size.height * aspectRatio;
      const targetHeight = size.height;
      return new Rect(
        (size.width - targetWidth) / 2,
        (size.height - targetHeight) / 2,
        targetWidth,
        targetHeight
      );
    }
  }

  intersects(other: Rect): boolean {
    return (
      this.left < other.right &&
      this.right > other.left &&
      this.top < other.bottom &&
      this.bottom > other.top
    );
  }

  union(other: Rect): Rect {
    const left = Math.min(this.left, other.left);
    const top = Math.min(this.top, other.top);
    const right = Math.max(this.right, other.right);
    const bottom = Math.max(this.bottom, other.bottom);
    return new Rect(left, top, right - left, bottom - top);
  }

  intersect(other: Rect): Rect {
    const left = Math.max(this.left, other.left);
    const top = Math.max(this.top, other.top);
    const right = Math.min(this.right, other.right);
    const bottom = Math.min(this.bottom, other.bottom);
    return new Rect(
      left,
      top,
      Math.max(0, right - left),
      Math.max(0, bottom - top)
    );
  }
}
