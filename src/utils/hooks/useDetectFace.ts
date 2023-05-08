import { useState, useEffect } from "react";
import * as faceapi from "face-api.js";

interface UseDetectFaceHook {
  modelsLoaded: boolean;
  detections: faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection }>[] | null;
  handleDetect: (onDetectEnd: () => void) => Promise<void>;
}

export default function useDetectFace(
  imageElement: HTMLImageElement | null,
  loadCounter: number
): UseDetectFaceHook { 
  const [detections, setDetections] = useState<faceapi.WithFaceLandmarks<{ detection: faceapi.FaceDetection }>[] | null>(
    null
  );
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    loadModels();
  }, [loadCounter]);

  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    setModelsLoaded(true);
  };

  const handleDetect = async (onDetectEnd: () => void) => {
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
