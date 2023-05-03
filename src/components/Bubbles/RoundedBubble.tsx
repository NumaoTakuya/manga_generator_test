import React from "react";
import BubbleProps from "@/utils/Bubble/BubbleProps";

export const roundedBubbleTailPos = (
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

const RoundedBubble: React.FC<BubbleProps> = ({
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
        rx={15}
        ry={15}
        stroke="black"
        strokeWidth={strokeWidth * 2}
      />
      {tail}
      <rect
        x={offsetX}
        y={offsetY}
        width={bubbleWidth}
        height={bubbleHeight}
        rx={15}
        ry={15}
        fill="white"
      />
    </svg>
  );
};

export default RoundedBubble;
