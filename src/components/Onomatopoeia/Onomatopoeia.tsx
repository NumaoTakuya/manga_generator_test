import React from "react";
import { Box } from "@mui/system";
import OnomatopoeiaProps from "@/utils/Onomatopoeia/OnomatopoeiaProps";

const Onomatopoeia = ({
  content,
  font,
  color,
  position,
  fontSize,
  rotation,
}: OnomatopoeiaProps): JSX.Element | null => {
  if (!content) return null;

  const baseStyle = {
    fontFamily: font,
    fontSize,
    position: "absolute",
    textAlign: "center",
    userSelect: "none",
    transform: `rotate(${rotation}deg)`,
  };

  const outerOutlineStyle = {
    ...baseStyle,
    left: position.x - fontSize / 2,
    top: position.y - fontSize / 2,
    color: color,
    WebkitTextStroke: `${fontSize / 4}px black`,
  };

  const innerOutlineStyle = {
    ...baseStyle,
    left: position.x - fontSize / 2,
    top: position.y - fontSize / 2,
    color: color,
    WebkitTextStroke: `${fontSize / 6}px white`,
  };

  const mainTextStyle = {
    ...baseStyle,
    left: position.x - fontSize / 2,
    top: position.y - fontSize / 2,
    color: color,
    zIndex: 1,
  };

  return (
    <>
      <Box component="span" sx={outerOutlineStyle}>
        {content}
      </Box>
      <Box component="span" sx={innerOutlineStyle}>
        {content}
      </Box>
      <Box component="span" sx={mainTextStyle}>
        {content}
      </Box>
    </>
  );
};

export default Onomatopoeia;
