import Size from "./Size"; // Sizeクラスのインポート

export default class Point { // Pointクラスの定義
  x: number; // X座標の定義
  y: number; // Y座標の定義

  constructor(x: number, y: number) { // コンストラクタ
    this.x = x; // X座標の設定
    this.y = y; // Y座標の設定
  }

  // 座標をSizeオブジェクトに変換
  toSize(): Size {
    return new Size(this.x, this.y);
  }

  // 他の点との距離を計算
  distance(other: Point): number {
    const dx = this.x - other.x; // X座標の差分
    const dy = this.y - other.y; // Y座標の差分
    return Math.sqrt(dx * dx + dy * dy); // ピタゴラスの定理による距離計算
  }

  // 他の点を加算
  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y); // 新しい点を生成して返す
  }

  // 他の点を減算
  subtract(other: Point): Point {
    return new Point(this.x - other.x, this.y - other.y); // 新しい点を生成して返す
  }

  // スカラー倍
  multiply(scalar: number): Point {
    return new Point(this.x * scalar, this.y * scalar); // 新しい点を生成して返す
  }

  // スカラー除算
  divide(scalar: number): Point {
    return new Point(this.x / scalar, this.y / scalar); // 新しい点を生成して返す
  } 

  // 原点を表す静的プロパティ
  static get ZERO(): Point {
    return new Point(0, 0);
  } 
}
