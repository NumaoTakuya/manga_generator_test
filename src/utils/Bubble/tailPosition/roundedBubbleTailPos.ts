import CenteredRect from "@/utils/classes/CenteredRect";

// 原点を中心とする横幅width, 縦幅をheightとする楕円の、角度angleの位置にある点の座標を返す
const roundedBubbleTailPos = (centeredRect: CenteredRect, angle: number) => {
  const newTailX = centeredRect.centerX + (centeredRect.width / 2) * Math.cos(angle);
  const newTailY = centeredRect.centerY + (centeredRect.height / 2) * Math.sin(angle);
  return { newTailX, newTailY };
};

export default roundedBubbleTailPos;
