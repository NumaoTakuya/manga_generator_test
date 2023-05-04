import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import CropImage from "../components/CropImage";
import CalculateImageAR from "../utils/CalculateImageAR";
import useDetectFace from "../utils/hooks/useDetectFace";
import Bubble from "../components/Bubble";
import Point from "../utils/classes/Point";

const PanelPage = () => {
  //Image
  const src =
    "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060";
  const ar = CalculateImageAR(src);
  const randomness = { x: 0.1, y: 0.3 };
  const width = 300;
  const height = width * ar;

  // Detection
  // useDetectFace
  const [imageElement, setImageElement] = useState(null);
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(() => {
    setImageElement(document.getElementById("image-0"));
  }, []);

  useEffect(() => {
    if (imageElement) {
      setLoadCounter((prevLoadCounter) => prevLoadCounter + 1);
    }
  }, [imageElement]);

  const detectFace = useDetectFace(imageElement, loadCounter);
  const [modelsLoaded, detections, handleDetect] = [
    detectFace.modelsLoaded,
    detectFace.detections,
    detectFace.handleDetect,
  ];
  const mouth = detections ? detections[0].landmarks.getMouth() : null;
  const mouthPosition = mouth
    ? {
        x: mouth[14].x.toFixed(2),
        y: mouth[14].y.toFixed(2),
      }
    : Point.ZERO;

  // Bubble
  // Relative positions of bubbles to mouth position
  const bubbleRelPos = [
    { x: 100, y: -100 },
    { x: -100, y: -20 },
    { x: 100, y: 70 },
  ];

  return (
    <Container
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <NavigationBar />
      <CropImage
        id="image-0"
        randomness={randomness}
        src={src}
        width={width}
        height={height}
      />
    </Container>
  );
};

export default PanelPage;
