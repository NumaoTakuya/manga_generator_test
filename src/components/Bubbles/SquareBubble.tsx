import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import CenteredRect from "@/utils/classes/CenteredRect";

// 長方形と、その長方形の中心から一定の角度で伸びる線分の交点を求める
// 解説 -> （スライドシェアリンクはる予定）
const isClamped = (num: number, min: number, max: number) => {
  return min <= num && num < max;
};
const calculateIntersection = (cRect: CenteredRect, angle: number) => {
  const Angle = (angle + Math.PI * 2) % (Math.PI * 2);
  const tanAngle = Math.tan(Angle);
  const moveVertical: boolean =
    Math.abs(tanAngle) <= cRect.height / cRect.width;
  const conditionC1: boolean =
    isClamped(Angle, 0, Math.PI / 2) ||
    isClamped(Angle, (Math.PI * 3) / 2, 2 * Math.PI);
  const conditionC2: boolean = isClamped(Angle, 0, Math.PI);
  const conditionC3: boolean = isClamped(Angle, Math.PI / 2, (Math.PI * 3) / 2);
  const conditionC4: boolean = isClamped(Angle, Math.PI, 2 * Math.PI);
  const w = cRect.width;
  const h = cRect.height;
  let newTailX: number = cRect.centerX;
  let newTailY: number = cRect.centerY;
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


export const squareBubbleTailPos = (cRect: CenteredRect, angle: number) => {
  const { newTailX, newTailY } = calculateIntersection(cRect, angle);
  return { newTailX, newTailY };
};

const SquareBubble: React.FC<EachBubbleProps> = ({
  offset,
  bubbleSize,
  strokeWidth,
  viewBoxSize,
  tail, 
}) => {
  return (
    <div 
      style={{
        position: "relative",
        width: viewBoxSize.width,
        height: viewBoxSize.height,
      }}
    >
      <svg
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}
      >
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          fill="white"
          stroke="black"
          strokeWidth={strokeWidth * 2}
        />
        {tail}
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SquareBubble;
