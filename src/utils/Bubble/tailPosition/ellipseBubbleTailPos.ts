import CenteredRect from "@/utils/classes/CenteredRect";

const ellipseBubbleTailPos = (centeredRect: CenteredRect, angle: number) => {
  const newTailX = centeredRect.centerX + (centeredRect.width / 2) * Math.cos(angle);
  const newTailY = centeredRect.centerY + (centeredRect.height / 2) * Math.sin(angle);
  return { newTailX, newTailY };
};

export default ellipseBubbleTailPos;
