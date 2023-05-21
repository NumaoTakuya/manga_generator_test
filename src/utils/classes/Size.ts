import Point from "./Point"; // Pointクラスのインポート

export default class Size { // Sizeクラスの定義
  width: number; // 幅の定義
  height: number; // 高さの定義

  constructor(width: number, height: number) { // コンストラクタ
    this.width = width; // 幅の設定
    this.height = height; // 高さの設定
  }

  static get ZERO(): Size { // 初期値（幅と高さが全て0）
    return new Size(0, 0);
  }

  // 幅と高さをPoint型として取得
  toPoint(): Point {
    return new Point(this.width, this.height);
  }

  // 他のSizeオブジェクトとの加算
  add(other: Size): Size {
    return new Size(this.width + other.width, this.height + other.height);
  }

  // 他のSizeオブジェクトとの減算
  subtract(other: Size): Size {
    return new Size(this.width - other.width, this.height - other.height);
  }

  // スカラー倍
  multiply(scalar: number): Size {
    return new Size(this.width * scalar, this.height * scalar);
  }

  // スカラーでの除算
  divide(scalar: number): Size {
    return new Size(this.width / scalar, this.height / scalar);
  } 
}
