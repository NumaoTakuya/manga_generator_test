import Point from "./Point"; // Pointクラスのインポート
import Size from "./Size"; // Sizeクラスのインポート

export default class Rect {
  // Rectクラスの定義
  left: number; // 左辺の位置
  top: number; // 上辺の位置
  width: number; // 幅
  height: number; // 高さ

  constructor(left: number, top: number, width: number, height: number) {
    // コンストラクタ
    this.left = left; // 左辺の位置を設定
    this.top = top; // 上辺の位置を設定
    this.width = width; // 幅を設定
    this.height = height; // 高さを設定
  }

  static get ZERO(): Rect {
    // 初期状態のRectを返す
    return new Rect(0, 0, 0, 0);
  }

  // 幅と高さを返す
  get size(): Size {
    return new Size(this.width, this.height);
  }

  // 左上の座標を返す
  get point(): Point {
    return new Point(this.left, this.top);
  } 
}
