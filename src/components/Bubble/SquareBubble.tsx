import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import { Typography, Box } from "@mui/material";

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
          style={{
            position: "relative",
            zIndex: 20,
          }}
        />
        {tail}
        <rect
          x={offset.x}
          y={offset.y}
          width={bubbleSize.width}
          height={bubbleSize.height}
          fill="white"
          style={{
            position: "relative",
            zIndex: 23,
          }} 
        />
        <foreignObject width={viewBoxSize.width} height={viewBoxSize.height}>
          <Box
            sx={{
              height: viewBoxSize.height,
              width: viewBoxSize.width,
              textAlign: "center",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "initial",
            }}
          >
            <Typography
              component="p"
              color="black"
              fontSize={20}
              sx={{
                width: bubbleSize.width / 1.414,
                lineHeight: 1,
                position: "relative",
                zIndex: 24,
              }}
            >
              {text}
            </Typography>
          </Box>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SquareBubble;
