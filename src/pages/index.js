import React, { useState, useEffect } from "react";
import * as faceapi from "face-api.js";
import Image from "next/image";
import {
  Button,
  Container,
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import NavigationBar from "../components/NavigationBar";

const sources = [
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102974784884711514/3f07ed359ce9d67463dbf0a01c56071d.jpg?width=900&height=1060",
  "https://media.discordapp.net/ephemeral-attachments/1092492867185950852/1102982059930161152/7f9e577686ec2e1e0700ff61232e208d.jpg?width=776&height=1060",
  "https://media.discordapp.net/attachments/1058796281146908762/1102982726287626270/00004-659911599.png?width=1024&height=1024",
  "https://media.discordapp.net/attachments/1061113259979178044/1102984309448646667/Screenshot_2023-05-02_at_12-19-44_Down_To_Earth_-_Episode_1.png?width=730&height=780",
];

const Detection = () => {
  const [detections, setDetections] = useState(null);
  const [sourceIndex, setSourceIndex] = useState(0);

  const [modelsLoaded, setModelsLoaded] = useState(false);
  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    setModelsLoaded(true);
  };

  const [loading, setLoading] = useState(false);
  const handleDetect = async () => {
    const imageElement = document.getElementById("face-image");

    if (!imageElement) return;

    const options =
      detections === null
        ? new faceapi.SsdMobilenetv1Options()
        : new faceapi.TinyFaceDetectorOptions();

    // setLoading(true);
    const detectionsWithLandmarks = await faceapi
      .detectAllFaces(imageElement, options)
      .withFaceLandmarks();
    // setLoading(false);

    setDetections(detectionsWithLandmarks);
  };

  const handleNext = () => {
    setSourceIndex((sourceIndex + 1) % sources.length);
    setDetections(null);
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
            Rectangle: x={x.toFixed(2)}, y={y.toFixed(2)}, width=
            {width.toFixed(2)}, height={height.toFixed(2)}
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
            {drawDetections()}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderDetections()}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDetect}
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
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default Detection;
