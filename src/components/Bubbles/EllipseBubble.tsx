import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";

const EllipseBubble: React.FC<EachBubbleProps> = ({
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
        <ellipse
          cx={bubbleSize.width / 2 + offset.x}
          cy={bubbleSize.height / 2 + offset.y}
          rx={bubbleSize.width / 2}
          ry={bubbleSize.height / 2}
          fill="white"
          stroke="black"
          strokeWidth={strokeWidth * 2}
        />
        {tail}
        <ellipse
          cx={bubbleSize.width / 2 + offset.x}
          cy={bubbleSize.height / 2 + offset.y}
          rx={bubbleSize.width / 2}
          ry={bubbleSize.height / 2}
          fill="white"
        />
      </svg>
    </div>
  );
};

export default EllipseBubble;
