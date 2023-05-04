import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import CenteredRect from "@/utils/classes/CenteredRect";

// 原点を中心とする横幅width, 縦幅をheightとする楕円の、角度angleの位置にある点の座標を返す
export const roundedBubbleTailPos = (cRect: CenteredRect, angle: number) => {
  const newTailX = cRect.centerX + (cRect.width / 2) * Math.cos(angle);
  const newTailY = cRect.centerY + (cRect.height / 2) * Math.sin(angle);
  return { newTailX, newTailY };
};

const RoundedBubble: React.FC<EachBubbleProps> = ({
  offset,
  bubbleSize,
  strokeWidth,
  viewBoxSize,
  tail, 
}) => {
  const borderRadius = 50;
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
          rx={borderRadius}
          ry={borderRadius}
          stroke="black"
          strokeWidth={strokeWidth * 2}
        />
        {tail}
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          rx={borderRadius}
          ry={borderRadius}
          fill="white"
        />
      </svg>
    </div>
  );
};

export default RoundedBubble;
