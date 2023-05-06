import CenteredRect from "@/utils/classes/CenteredRect";

const ellipseBubbleTailPos = (cRect: CenteredRect, angle: number) => {
  const newTailX = cRect.centerX + (cRect.width / 2) * Math.cos(angle);
  const newTailY = cRect.centerY + (cRect.height / 2) * Math.sin(angle);
  return { newTailX, newTailY };
};

export default ellipseBubbleTailPos;
