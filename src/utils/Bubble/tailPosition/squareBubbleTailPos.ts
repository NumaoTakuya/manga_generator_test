import CenteredRect from "@/utils/classes/CenteredRect";

// 数値が範囲内に収まっているか確認する関数
const isClamped = (num: number, min: number, max: number) => {
  return min <= num && num < max;  // numがmin以上かつmax未満ならtrue、それ以外ならfalseを返す
};

// 長方形と、その長方形の中心から一定の角度で伸びる線分の交点を求める関数
const calculateIntersection = (centeredRect: CenteredRect, angle: number) => {
  // 角度を0～2πの範囲に正規化
  const Angle = (angle + Math.PI * 2) % (Math.PI * 2);
  // 角度の正接を計算
  const tanAngle = Math.tan(Angle);
  // 移動方向の決定（垂直移動か水平移動か）
  const moveVertical: boolean =
    Math.abs(tanAngle) <= centeredRect.height / centeredRect.width;
  // 角度の範囲に応じた条件
  const conditionC1: boolean =
    isClamped(Angle, 0, Math.PI / 2) ||
    isClamped(Angle, (Math.PI * 3) / 2, 2 * Math.PI);
  const conditionC2: boolean = isClamped(Angle, 0, Math.PI);
  const conditionC3: boolean = isClamped(Angle, Math.PI / 2, (Math.PI * 3) / 2);
  const conditionC4: boolean = isClamped(Angle, Math.PI, 2 * Math.PI);
  // 長方形の幅と高さ
  const w = centeredRect.width;
  const h = centeredRect.height;
  // 交点の初期値を長方形の中心に設定
  let newTailX: number = centeredRect.centerX;
  let newTailY: number = centeredRect.centerY;
  // それぞれの条件に応じて交点を計算
  if (moveVertical && conditionC1) {
    newTailX += w / 2;
    newTailY += (w / 2) * tanAngle;
  } else if (!moveVertical && conditionC2) {
    newTailX += h / (2 * tanAngle);
    newTailY += h / 2;
  } else if (moveVertical && conditionC3) {
    newTailX -= w / 2;
    newTailY -= (w / 2) * tanAngle;
  } else if (!moveVertical && conditionC4) {
    newTailX -= h / (2 * tanAngle);
    newTailY -= h / 2;
  }
  // 交点を返す
  return { newTailX, newTailY };
};

// 長方形の周上を動く関数
const squareBubbleTailPos = (centeredRect: CenteredRect, angle: number) => {
  // 交点を計算
  const { newTailX, newTailY } = calculateIntersection(centeredRect, angle);
  // 交点を返す
  return { newTailX, newTailY };
};

export default squareBubbleTailPos; 
