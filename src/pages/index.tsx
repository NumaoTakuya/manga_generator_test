import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Container, Grid, Typography } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import useDetectFace from "../utils/hooks/useDetectFace"; 
import imgSources from "../utils/samples/imgSources";

const Detection = () => {
  // useDetectFace
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(
    null
  );
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(() => {
    setImageElement(document.getElementById("face-image") as HTMLImageElement);
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
    setSourceIndex((sourceIndex + 1) % imgSources.length);
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
                src={imgSources[sourceIndex]}
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
