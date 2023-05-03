import React from "react";
import BubbleProps from "@/utils/Bubble/BubbleProps";

export const ellipseBubbleTailPos = (
  centerX: number,
  centerY: number,
  bubbleWidth: number,
  bubbleHeight: number,
  angle: number
) => {
  const newTailX = centerX + (bubbleWidth / 2) * Math.cos(angle);
  const newTailY = centerY + (bubbleHeight / 2) * Math.sin(angle);
  return { newTailX, newTailY };
};

const EllipseBubble: React.FC<BubbleProps> = ({
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
      <ellipse
        cx={bubbleWidth / 2 + offsetX}
        cy={bubbleHeight / 2 + offsetY}
        rx={bubbleWidth / 2}
        ry={bubbleHeight / 2}
        fill="white"
        stroke="black"
        strokeWidth={strokeWidth * 2}
      />
      {tail}
      <ellipse
        cx={bubbleWidth / 2 + offsetX}
        cy={bubbleHeight / 2 + offsetY}
        rx={bubbleWidth / 2}
        ry={bubbleHeight / 2}
        fill="white"
      />
    </svg>
  );
};

export default EllipseBubble;
