import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import NavigationBar from "../components/NavigationBar";  

function getRandom(from: number, to: number) {
  return from + Math.random() * (to - from);
}

const FramePage = () => {
  const src =
    "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060";
  const width = 340;
  const height = 400; 
  const randomness = { x: 0.1, y: 0.3 };
  const [isCropped, setIsCropped] = useState(false);
  const [cropValues, setCropValues] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0,
  });

  const handleCropButtonClick = () => {
    setIsCropped(!isCropped);

    if (!isCropped) {
      setCropValues({
        x1: Math.floor(getRandom(0, randomness.x) * width),
        y1: Math.floor(getRandom(0, randomness.y) * height),
        x2: Math.floor(getRandom(1 - randomness.x, 1) * width),
        y2: Math.floor(getRandom(0, randomness.y) * height),
        x3: Math.floor(getRandom(1 - randomness.x, 1) * width),
        y3: Math.floor(getRandom(1 - randomness.y, 1) * height),
        x4: Math.floor(getRandom(0, randomness.x) * width),
        y4: Math.floor(getRandom(1 - randomness.y, 1) * height),
      });
    }
  };

  const croppedStyle = {
    clipPath: `polygon(${cropValues.x1}px ${cropValues.y1}px, ${cropValues.x2}px ${cropValues.y2}px, ${cropValues.x3}px ${cropValues.y3}px, ${cropValues.x4}px ${cropValues.y4}px)`,
  };

  return (
    <Container
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          position: "relative",
          width: width,
          height: height,
          marginBottom: "1rem",
          mt: 10,
          ...(isCropped ? croppedStyle : {}),
        }}
      >
        <Image
          id="face-image"
          src={src}
          alt="face"
          layout="responsive"
          width={width}
          height={height}
        />
        {isCropped && (
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
              strokeWidth="2"
            />
          </svg>
        )}
      </Box>
      <Button onClick={handleCropButtonClick}>
        {isCropped ? "Reset" : "Crop and Add Border"}
      </Button>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
        }}
      />
    </Container>
  );
};

export default FramePage;
