import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";

const RoundedBubble: React.FC<EachBubbleProps> = ({
  offset,
  bubbleSize,
  strokeWidth,
  viewBoxSize,
  tail,
  text,
}) => {
  const borderRadius = 60;
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
        <text
          x={offset.x + bubbleSize.width / 2}
          y={offset.y + bubbleSize.height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="16"
          fontFamily="Arial, sans-serif"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default RoundedBubble;
