import Rect from "./Rect"; // Rectクラスをインポート
import Point from "./Point"; // Pointクラスをインポート
import Size from "./Size"; // Sizeクラスをインポート

// 中心点と幅と高さを指定するクラス
export default class CenteredRect extends Rect {  
  centerX: number; // 中心点X座標の定義
  centerY: number; // 中心点Y座標の定義

  constructor(centerX: number, centerY: number, width: number, height: number) { // コンストラクター
    const left = centerX - width / 2; // 矩形の左端座標
    const top = centerY - height / 2; // 矩形の上端座標
    super(left, top, width, height); // スーパークラスのコンストラクターを呼び出し
    this.centerX = centerX; // 中心点X座標の設定
    this.centerY = centerY; // 中心点Y座標の設定
  }

  static get ZERO(): CenteredRect { // 矩形の初期値（中心と幅と高さが全て0）
    return new CenteredRect(0, 0, 0, 0);
  } 

  // 矩形のサイズを取得するゲッター
  get size(): Size {
    return new Size(this.width, this.height);
  } 
}
