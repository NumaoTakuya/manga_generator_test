import CenteredRect from "@/utils/classes/CenteredRect";

// 原点を中心とする横幅width, 縦幅をheightとする楕円の、角度angleの位置にある点の座標を返す
const roundedBubbleTailPos = (cRect: CenteredRect, angle: number) => {
  const newTailX = cRect.centerX + (cRect.width / 2) * Math.cos(angle);
  const newTailY = cRect.centerY + (cRect.height / 2) * Math.sin(angle);
  return { newTailX, newTailY };
};

export default roundedBubbleTailPos;
