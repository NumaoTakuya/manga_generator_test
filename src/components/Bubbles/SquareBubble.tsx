import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";

const SquareBubble: React.FC<EachBubbleProps> = ({
  offset,
  bubbleSize,
  strokeWidth,
  viewBoxSize,
  tail, 
  text,
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
