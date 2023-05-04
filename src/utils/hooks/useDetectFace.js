// useDetectFace.js
import { useState, useEffect } from "react";
import * as faceapi from "face-api.js";

export default function useDetectFace(imageElement) {
  const [detections, setDetections] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    setModelsLoaded(true);
  };

  const handleDetect = async (onDetectEnd) => {
    if (!imageElement) return;

    const options = new faceapi.SsdMobilenetv1Options();

    const detectionsWithLandmarks = await faceapi
      .detectAllFaces(imageElement, options)
      .withFaceLandmarks();

    setDetections(detectionsWithLandmarks);
    onDetectEnd();
  };

  return { modelsLoaded, detections, handleDetect };
}
