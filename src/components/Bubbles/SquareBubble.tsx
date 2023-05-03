import React from "react";
import BubbleProps from "@/utils/Bubble/BubbleProps";

// 長方形と、その長方形の中心から一定の角度で伸びる線分の交点を求める
// 解説
const isClamped = (num: number, min: number, max: number) => {
  return min <= num && num < max;
};
const calculateIntersection = (
  centerX: number,
  centerY: number,
  bubbleWidth: number,
  bubbleHeight: number,
  angle: number
) => {
  const tanAngle = Math.tan(angle);
  const moveVertical: boolean =
    Math.abs(tanAngle) <= bubbleHeight / bubbleWidth;
  const conditionC1: boolean =
    isClamped(angle, 0, Math.PI / 2) ||
    isClamped(angle, (Math.PI * 3) / 2, 2 * Math.PI);
  const conditionC2: boolean = isClamped(angle, 0, Math.PI);
  const conditionC3: boolean = isClamped(angle, Math.PI / 2, (Math.PI * 3) / 2);
  const conditionC4: boolean = isClamped(angle, Math.PI, 2 * Math.PI);
  const w = bubbleWidth;
  const h = bubbleHeight;
  let newTailX: number = centerX;
  let newTailY: number = centerY;
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
  return { newTailX, newTailY };
};

export const squareBubbleTailPos = (
  centerX: number,
  centerY: number,
  bubbleWidth: number,
  bubbleHeight: number,
  angle: number
) => {
  const { newTailX, newTailY } = calculateIntersection(
    centerX,
    centerY,
    bubbleWidth,
    bubbleHeight,
    angle
  );
  return { newTailX, newTailY };
};

const SquareBubble: React.FC<BubbleProps> = ({
  offsetX,
  offsetY,
  bubbleWidth,
  bubbleHeight,
  strokeWidth,
  viewBoxWidth,
  viewBoxHeight,
  tail,
}) => {
  return (
    <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
      <rect
        x={offsetX}
        y={offsetY}
        width={bubbleWidth}
        height={bubbleHeight}
        fill="white"
        stroke="black"
        strokeWidth={strokeWidth * 2}
      />
      {tail}
      <rect
        x={offsetX}
        y={offsetY}
        width={bubbleWidth}
        height={bubbleHeight}
        fill="white"
      />
    </svg>
  );
};

export default SquareBubble;
