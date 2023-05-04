import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import CropImage from "../components/CropImage";
import CalculateImageAR from "../utils/CalculateImageAR";
import useDetectFace from "../utils/hooks/useDetectFace";
import Bubble from "../components/Bubble";
import Point from "../utils/classes/Point";
import Size from "../utils/classes/Size";
import getRandomPointOnUnitCircle from "../utils/getRandomPointOnUnitCircle";

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
  const [mouthPosition, setMouthPosition] = useState(Point.ZERO);

  useEffect(() => {
    if (modelsLoaded) {
      handleDetect(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelsLoaded]);

  useEffect(() => {
    if (detections) {
      const imageRect = imageElement.getBoundingClientRect();
      const mouth = detections[0].landmarks.getMouth();
      const newMouthPosition = new Point(
        imageRect.left + mouth[14].x,
        imageRect.top + mouth[14].y
      );
      setMouthPosition(newMouthPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detections]);

  // Bubble
  // Relative positions of bubbles to mouth position
  const bubbleTypes = ["rounded", "square", "ellipse"];
  const r = Math.random() * Math.PI * 2;
  const r1 = getRandomPointOnUnitCircle(r);
  const r2 = getRandomPointOnUnitCircle(r + 2);
  const r3 = getRandomPointOnUnitCircle(r + 4);
  const bubbleRelativePositions = [
    r1.multiply(230),
    r2.multiply(240),
    r3.multiply(250),
  ];
  const bubbleSizes = [
    new Size(300, 400),
    new Size(400, 300),
    new Size(450, 300),
  ];

  const bubble = (index) => {
    return (
      <>
        <Bubble
          key={index}
          type={bubbleTypes[index]}
          size={bubbleSizes[index]}
          position={mouthPosition.add(bubbleRelativePositions[index])}
          targetPosition={mouthPosition}
        />
      </>
    );
  };

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
      {Array(3)
        .fill(null)
        .map((_, index) => bubble(index))}
    </Container>
  );
};

export default PanelPage;
