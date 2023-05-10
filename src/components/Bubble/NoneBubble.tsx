import React from "react";
import EachBubbleProps from "@/utils/Bubble/EachBubbleProps";
import { Typography, Box } from "@mui/material";

const NoneBubble: React.FC<EachBubbleProps> = ({
  bubbleSize,
  viewBoxSize, 
  text,
  fontSize,
  font,
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
              fontSize={fontSize}
              fontFamily={font}
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

export default NoneBubble;
