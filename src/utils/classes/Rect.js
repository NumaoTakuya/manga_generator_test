import Point from "./Point";
import Size from "./Size";

export default class Rect {
  constructor(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
  }

  static get ZERO() {
    return new Rect(0, 0, 0, 0);
  }

  get size() {
    return new Size(this.width, this.height);
  }

  get point() {
    return new Point(this.left, this.top);
  }

  // 右端の座標を取得する
  get right() {
    return this.left + this.width;
  }

  // 底辺の座標を取得する
  get bottom() {
    return this.top + this.height;
  }

  // サイズを取得する
  get size() {
    return new Size(this.width, this.height);
  }

  // 面積を取得する
  get area() {
    return this.width * this.height;
  }

  // 中心座標を取得する
  get center() {
    return new Point(this.left + this.width / 2, this.top + this.height / 2);
  }

  // 矩形を移動する
  move(x, y) {
    return new Rect(this.left + x, this.top + y, this.width, this.height);
  }

  // 矩形をリサイズする
  resize(width, height) {
    return new Rect(this.left, this.top, width, height);
  }

  // 矩形をスケーリングする
  scale(scaleX, scaleY) {
    return new Rect(
      this.left * scaleX,
      this.top * scaleY,
      this.width * scaleX,
      this.height * scaleY
    );
  }

  // 矩形を縦横比を維持したまま指定したサイズに収まるようにリサイズする
  fitInto(size) {
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

  // 矩形が他の矩形と重なっているかを判定する
  intersects(other) {
    return (
      this.left < other.right &&
      this.right > other.left &&
      this.top < other.bottom &&
      this.bottom > other.top
    );
  }

  // 矩形を結合する
  union(other) {
    const left = Math.min(this.left, other.left);
    const top = Math.min(this.top, other.top);
    const right = Math.max(this.right, other.right);
    const bottom = Math.max(this.bottom, other.bottom);
    return new Rect(left, top, right - left, bottom - top);
  }

  // 矩形を切り取る
  intersect(other) {
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

  // 矩形を平行移動する
  static translate(rect, x, y) {
    return rect.move(x, y);
  }

  // 矩形をリサイズする
  static resize(rect, width, height) {
    return rect.resize(width, height);
  }

  // 矩形をスケーリングする
  static scale(rect, scaleX, scaleY) {
    return rect.scale(scaleX, scaleY);
  }

  // 矩形を縦横比を維持したまま指定したサイズに収まるようにリサイズする
  static fitInto(rect, size) {
    return rect.fitInto(size);
  }

  // 矩形が他の矩形と重なっているかを判定する
  static intersects(rect1, rect2) {
    return rect1.intersects(rect2);
  }

  // 矩形を結合する
  static union(rect1, rect2) {
    return rect1.union(rect2);
  }

  // 矩形を切り取る
  static intersect(rect1, rect2) {
    return rect1.intersect(rect2);
  }
}
