import Rect from "./Rect";
import Point from "./Point";
import Size from "./Size";

export default class CenteredRect extends Rect {
  centerX: number;
  centerY: number;

  constructor(centerX: number, centerY: number, width: number, height: number) {
    const left = centerX - width / 2;
    const top = centerY - height / 2;
    super(left, top, width, height);
    this.centerX = centerX;
    this.centerY = centerY;
  }

  static get ZERO(): CenteredRect {
    return new CenteredRect(0, 0, 0, 0);
  }

  // 中心座標を取得する
  get center(): Point {
    return new Point(this.centerX, this.centerY);
  }

  get point(): Point {
    return new Point(this.centerX, this.centerY);
  }

  get size(): Size {
    return new Size(this.width, this.height);
  }

  // 中心座標を設定する
  set center(value: Point) {
    this.centerX = value.x;
    this.centerY = value.y;
    this.left = this.centerX - this.width / 2;
    this.top = this.centerY - this.height / 2;
  }

  // 矩形を移動する
  move(x: number, y: number): CenteredRect {
    const centerX = this.centerX + x;
    const centerY = this.centerY + y;
    return new CenteredRect(centerX, centerY, this.width, this.height);
  }
}
