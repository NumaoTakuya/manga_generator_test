import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import CenteredRect from "@/utils/classes/CenteredRect";

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
  containerRef,
}) => {
  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: viewBoxSize.width * 10,
        height: viewBoxSize.height * 10,
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
          rx={15}
          ry={15}
          stroke="black"
          strokeWidth={strokeWidth * 2}
        />
        {tail}
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          rx={15}
          ry={15}
          fill="white"
        />
      </svg>
    </div>
  );
};

export default RoundedBubble;
