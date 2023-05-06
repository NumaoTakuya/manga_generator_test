import Rect from "./Rect";
import Point from "./Point";
import Size from "./Size";

export default class CenteredRect extends Rect {
  constructor(centerX, centerY, width, height) {
    const left = centerX - width / 2;
    const top = centerY - height / 2;
    super(left, top, width, height);
    this.centerX = centerX;
    this.centerY = centerY;
  }

  // 中心座標を取得する
  get center() {
    return new Point(this.centerX, this.centerY);
  }

  get point() {
    return new Point(this.left, this.top);
  }

  get size() {
    return new Size(this.width, this.height);
  }

  // 中心座標を設定する
  set center(value) {
    this.centerX = value.x;
    this.centerY = value.y;
    this.left = this.centerX - this.width / 2;
    this.top = this.centerY - this.height / 2;
  }

  // 矩形を移動する
  move(x, y) {
    const centerX = this.centerX + x;
    const centerY = this.centerY + y;
    return new CenteredRect(centerX, centerY, this.width, this.height);
  }
}
