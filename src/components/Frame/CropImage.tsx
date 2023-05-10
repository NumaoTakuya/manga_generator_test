import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { FrameRect } from "@/utils/DataModels/MangaDataModel";

interface CropImageProps {
  id: string;
  src: string;
  frameRect: FrameRect;
}

function getRandom(from: number, to: number): number {
  return from + Math.random() * (to - from);
}

const CropImage = ({
  id,
  src,
  frameRect,
}: CropImageProps): JSX.Element => {
  const centeredRect = frameRect.centeredRect;
  const randomness = frameRect.cropRandomness;
  const width = centeredRect.width;
  const height = centeredRect.height;
  const cropValues = {
    x1: Math.floor(getRandom(0, randomness.x) * width),
    y1: Math.floor(getRandom(0, randomness.y) * height),
    x2: Math.floor(getRandom(1 - randomness.x, 1) * width),
    y2: Math.floor(getRandom(0, randomness.y) * height),
    x3: Math.floor(getRandom(1 - randomness.x, 1) * width),
    y3: Math.floor(getRandom(1 - randomness.y, 1) * height),
    x4: Math.floor(getRandom(0, randomness.x) * width),
    y4: Math.floor(getRandom(1 - randomness.y, 1) * height),
  };

  const croppedStyle = {
    clipPath: `polygon(${cropValues.x1}px ${cropValues.y1}px, ${cropValues.x2}px ${cropValues.y2}px, ${cropValues.x3}px ${cropValues.y3}px, ${cropValues.x4}px ${cropValues.y4}px)`,
  };

  return (
    <Box
      sx={{
        position: "absolute",
        left: centeredRect.centerX - width / 2,
        top: centeredRect.centerY - height / 2,
        width: width,
        height: height,
        marginBottom: "1rem",
        mt: 10,
        ...croppedStyle,
      }}
    >
      <Image
        id={id}
        src={src}
        alt="face"
        layout="responsive"
        width={width}
        height={height}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <polyline
          points={`${cropValues.x1},${cropValues.y1} ${cropValues.x2},${cropValues.y2} ${cropValues.x3},${cropValues.y3} ${cropValues.x4},${cropValues.y4} ${cropValues.x1},${cropValues.y1}`}
          fill="none"
          stroke="black"
          strokeWidth={6}
        />
      </svg>
    </Box>
  );
};

export default CropImage;
