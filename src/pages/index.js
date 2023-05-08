import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import useDetectFace from "../utils/hooks/useDetectFace";
import useMousePosition from "@/utils/hooks/useMousePosition";

const sources = [
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060",
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102982059930161152/7f9e577686ec2e1e0700ff61232e208d.jpg?width=776&height=1060",
  "https://media.discordapp.net/attachments/1058796281146908762/1102982726287626270/00004-659911599.png?width=1024&height=1024",
  "https://media.discordapp.net/attachments/1061113259979178044/1102984309448646667/Screenshot_2023-05-02_at_12-19-44_Down_To_Earth_-_Episode_1.png?width=730&height=780",
]; 
const Detection = () => { 


  // useDetectFace
  const [imageElement, setImageElement] = useState(null);
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(() => {
    setImageElement(document.getElementById("face-image")); 
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

  // Next
  const [showDetections, setShowDetections] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);
  const handleNext = () => {
    setShowDetections(false);
    setSourceIndex((sourceIndex + 1) % sources.length);
  };

  const handleShowDetections = () => {
    handleDetect(() => {
      setShowDetections(true);
    });
  };

  const drawDetections = () => {
    if (!detections) return null;

    return (
      <svg
        width={640}
        height={480}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {detections.map((detection, i) => {
          const { x, y, width, height } = detection.detection.box;
          const mouth = detection.landmarks.getMouth();

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                stroke="red"
                strokeWidth="2"
                fill="none"
              />
              <circle cx={mouth[14].x} cy={mouth[14].y} r="4" fill="blue" />
            </g>
          );
        })}
      </svg>
    );
  };

  const renderDetections = () => {
    if (!modelsLoaded || !detections) return null;
    return detections.map((detection, i) => {
      const { x, y, width, height } = detection.detection.box;
      const fixedCoords = {
        x: x.toFixed(2),
        y: y.toFixed(2),
        width: width.toFixed(2),
        height: height.toFixed(2),
      };
      const mouth = detection.landmarks.getMouth();
      const mouthCoords = `(${mouth[14].x.toFixed(2)}, ${mouth[14].y.toFixed(
        2
      )})`;

      return (
        <div key={i}>
          <Typography variant="h6" gutterBottom>
            Detection {i + 1}
          </Typography>
          <Typography variant="body1">
            Rectangle: x={fixedCoords.x}, y={fixedCoords.y}, width=
            {fixedCoords.width}, height={fixedCoords.height}
          </Typography>
          <Typography variant="body1">
            Mouth Coordinates: {mouthCoords}
          </Typography>
        </div>
      );
    });
  };

  return (
    <Container>
      <NavigationBar />
      <Typography variant="h4" gutterBottom sx={{ mt: 10 }}>
        Face Detection Test
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-block" }}>
              <Image
                id="face-image"
                src={sources[sourceIndex]}
                alt="face"
                layout="responsive"
                width={640}
                height={480}
              />
            </div>
            {showDetections && drawDetections()}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderDetections()}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleShowDetections}
        sx={{ marginTop: 2 }}
      >
        Detect Faces
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleNext}
        sx={{ marginTop: 2, marginLeft: 1 }}
      >
        Next Image
      </Button>
    </Container>
  );
};

export default Detection;
