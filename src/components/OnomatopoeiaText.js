// components/OnomatopoeiaText.js
import React from "react";
import { Box } from "@mui/system";

const OnomatopoeiaText = ({
  content,
  font,
  color,
  position,
  size,
  rotation,
}) => {
  if (!content) return null;
  const onomatopoeiaStyle = {
    fontFamily: font,
    fontSize: `${size}px`,
    color: color,
    transform: `rotate(${rotation}deg)`,
    position: "absolute",
    left: position.x - size / 2,
    top: position.y - size / 2,
  };

  return (
    <Box
      component="span"
      sx={{
        ...onomatopoeiaStyle,
        userSelect: "none",
        textAlign: "center",
      }}
    >
      {content}
    </Box>
  );
};

export default OnomatopoeiaText;
